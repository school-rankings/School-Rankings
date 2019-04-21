import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolOverviewComponent } from './school-details/school-overview/school-overview.component';
import { PrePrimaryComponent } from './school-details/pre-primary/pre-primary.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/_guards/auth.guard';
import { PrimaryComponent } from './school-details/primary/primary.component';
import { MiddleComponent } from './school-details/middle/middle.component';
import { SecondaryComponent } from './school-details/secondary/secondary.component';
import { SeniorSecondaryComponent } from './school-details/senior-secondary/senior-secondary.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
   },
   {
    path: 'contact',
    component: ContactComponent
   },
   {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'school',
    children: [
      {
        path: ':id',
        component: SchoolOverviewComponent
      },
      {
        path: 'pre-primary',
        children: [
          {
            path: ':id',
            component: PrePrimaryComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'primary',
        children: [
          {
            path: ':id',
            component: PrimaryComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'middle',
        children: [
          {
            path: ':id',
            component: MiddleComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'secondary',
        children: [
          {
            path: ':id',
            component: SecondaryComponent,
            canActivate: [AuthGuard]
          }
        ]
      },
      {
        path: 'senior-secondary',
        children: [
          {
            path: ':id',
            component: SeniorSecondaryComponent,
            canActivate: [AuthGuard]
          }
        ]
      }
    ]
  },
  {
    path: 'search',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
