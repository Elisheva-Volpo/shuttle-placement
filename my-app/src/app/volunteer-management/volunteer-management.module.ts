import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteerListComponent } from './volunteer-list/volunteer-list.component';
import { EditVolunteerComponent } from './edit-volunteer/edit-volunteer.component';
import { HttpClientModule } from '@angular/common/http';
import { VolunteerService } from './volunteer.sevice';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const VOLUNTEER_ROUTS: Route[] = [
  { path: "volunteer/:id", component: EditVolunteerComponent }
]


@NgModule({
  declarations: [VolunteerListComponent,EditVolunteerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(VOLUNTEER_ROUTS),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    VolunteerService
  ],
  exports:[VolunteerListComponent]
})
export class VolunteerManagementModule { }
