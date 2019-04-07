import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from '../_services/auth.service';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(private router: Router, private auth: AuthService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    
    return this.auth.user$.pipe(
      take(1),
      map(user=> !!user),
      tap(loggedIn => {
        if(!loggedIn){
          console.log('Access Denied!!');
          this.router.navigate(['/login']);
        }
      })

    )

  
  
  }
  
}
