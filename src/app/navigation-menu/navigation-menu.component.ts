import { Component, OnInit, NgModule } from '@angular/core';
import { AngularStickyThingsModule } from '../directives/sticky-things/angular-sticky-things.module';
import { AuthService } from '../auth/_services/auth.service';

@NgModule({
  declarations: [

  ],
  imports: [
   AngularStickyThingsModule
  ]
})

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  isAuth: boolean= false;
  navMenu: any;

  constructor(private auth: AuthService) {
    this.navMenu = { 'home': 'Home', 'login':'Login'};

    }

    ngOnInit() {
      console.log('Auth User: ', this.auth.user$.subscribe((res)=> {
        if(res){
          this.isAuth = true;
        }
      }));
    }

    signOut(){
      console.log('Auth User: ', this.auth.user$);
      this.auth.googleSignOut();
    }
}
