import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolOverviewComponent } from './school-details/school-overview/school-overview.component';
import { GrdFilterPipe } from './pipes/grd-filter.pipe';
import { StickyThingDirective} from './directives/sticky-things/sticky-thing.directive';
import { GoogleChartComponent } from './school-details/google-chart/google-chart.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PrePrimaryComponent } from './school-details/pre-primary/pre-primary.component';
import { SchoolBannerTitleComponent } from './school-details/school-banner-title/school-banner-title.component';
import { QuickStatsComponent } from './school-details/quick-stats/quick-stats.component';
import { SchoolTabsNavComponent } from './school-details/school-tabs-nav/school-tabs-nav.component';
import { LoginComponent } from './login/login.component';
import { LoginDirective } from './directives/login/login.directive';
import { AuthGuard } from './auth/_guards/auth.guard';
import { PrimaryComponent } from './school-details/primary/primary.component';
import { MiddleComponent } from './school-details/middle/middle.component';
import { SecondaryComponent } from './school-details/secondary/secondary.component';
import { SeniorSecondaryComponent } from './school-details/senior-secondary/senior-secondary.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    ContactComponent,
    AboutComponent,
    PageNotFoundComponent,
    DashboardComponent,
    SchoolOverviewComponent,
    GrdFilterPipe,
    StickyThingDirective,
    GoogleChartComponent,
    SearchBarComponent,
    PrePrimaryComponent,
    SchoolBannerTitleComponent,
    QuickStatsComponent,
    SchoolTabsNavComponent,
    LoginComponent,
    LoginDirective,
    PrimaryComponent,
    MiddleComponent,
    SecondaryComponent,
    SeniorSecondaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule.forRoot(),
    AngularFireModule.initializeApp(environment.config),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
