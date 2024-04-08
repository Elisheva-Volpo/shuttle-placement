import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { Route, RouterModule } from '@angular/router';
import { VolunteerListComponent } from './volunteer-management/volunteer-list/volunteer-list.component';
import { PlacementShuttleSystemComponent } from './scheduling/placement-shuttle-system/placement-shuttle-system.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SchedulingModule } from './scheduling/scheduling.module';
import { VolunteerManagementModule } from './volunteer-management/volunteer-management.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home/home.component';

const APP_ROUTS: Route[] = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "volunteers", component: VolunteerListComponent },
  { path: "shuttle", component: PlacementShuttleSystemComponent },
  { path: "**", component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterTestingModule,
    RouterModule.forRoot(APP_ROUTS),
    SchedulingModule,
    VolunteerManagementModule,
    CommonModule
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
