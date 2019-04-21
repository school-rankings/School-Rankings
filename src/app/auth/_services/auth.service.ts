import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

  user$: Observable<any>;
  public returnUrl: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore) {

    this.user$ = this.afAuth.authState
      .pipe(switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }

      })
      );
  }

ngOnInit(){
  

}

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
    
  }

  async googleRegister(){
    const provider = new auth.GoogleAuthProvider();
   
  } 

  async googleSignOut() {
    return await this.afAuth.auth.signOut().then((res) => {
      this.router.navigate(['/login']);
    }, (error) => {
      console.log(error);
    });
  }

  private updateUserData({ uid, email, displayName }: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName
    };
    
    if(this.returnUrl){
      this.router.navigateByUrl(this.returnUrl);
      this.returnUrl = null;
    }
    else{
      this.router.navigateByUrl('/');
    }

    return userRef.set(data, { merge: true });

  }
}
