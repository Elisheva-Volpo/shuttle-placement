import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlacementShuttleSystemComponent } from './placement-shuttle-system/placement-shuttle-system.component';
import { VolunteerManagementModule } from '../volunteer-management/volunteer-management.module';
import { ShuttleService } from './shuttle.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VolunteerService } from '../volunteer-management/volunteer.sevice';





@NgModule({
  declarations: [PlacementShuttleSystemComponent],
  imports: [
    CommonModule,
    VolunteerManagementModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[ShuttleService,VolunteerService],
  exports:[PlacementShuttleSystemComponent]
})
export class SchedulingModule { }
