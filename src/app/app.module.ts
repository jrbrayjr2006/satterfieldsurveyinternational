import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdCheckboxModule, MatListModule, MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InstitutionsComponent } from './institutions/institutions.component';
import { PhysiciansComponent } from './physicians/physicians.component';
import { PatientsComponent } from './patients/patients.component';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CountriesComponent } from './countries/countries.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'institutions', component: InstitutionsComponent},
  { path: 'patients', component: PatientsComponent },
  { path: 'physicians', component: PhysiciansComponent },
  { path: 'countries', component: CountriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InstitutionsComponent,
    PhysiciansComponent,
    PatientsComponent,
    HomeComponent,
    SidenavComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCheckboxModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
