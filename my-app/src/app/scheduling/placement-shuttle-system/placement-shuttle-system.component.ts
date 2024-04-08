import { Component, OnInit } from '@angular/core';
import { ShuttleService } from '../shuttle.service';
import { Volunteer } from 'src/app/volunteer-management/volunteer.model';
import { FormControl, FormGroup } from '@angular/forms';
import { VolunteerService } from 'src/app/volunteer-management/volunteer.sevice';



@Component({
  selector: 'app-placement-shuttle-system',
  templateUrl: './placement-shuttle-system.component.html',
  styleUrls: ['./placement-shuttle-system.component.scss']
})
export class PlacementShuttleSystemComponent implements OnInit {

  Sunday: Volunteer[] = [];
  Monday: Volunteer[] = [];
  Tuesday: Volunteer[] = [];
  Wednesday: Volunteer[] = [];
  Thursday: Volunteer[] = [];
  Friday: Volunteer[] = [];
  Shabes: Volunteer[] = [];
  form: FormGroup = new FormGroup({});
  editShuttle: Volunteer[] = [];
  volunteersList: Volunteer[] = [];
  flag:boolean=false;

  constructor(private _shutlleService: ShuttleService,private _volunteerService:VolunteerService) {

  }

  ngOnInit(): void {
    this.flag=false;
    this._shutlleService.getVolunteers().subscribe(data => {
      this.volunteersList = data;
      console.log(`shuttle: ${this.volunteersList}`);
      this.Sunday = this._shutlleService.getPerDays(this.volunteersList, 0);
      this.Monday = this._shutlleService.getPerDays(this.volunteersList, 1);
      this.Tuesday = this._shutlleService.getPerDays(this.volunteersList, 2);
      this.Wednesday = this._shutlleService.getPerDays(this.volunteersList, 3);
      this.Thursday = this._shutlleService.getPerDays(this.volunteersList, 4);
      this.Friday = this._shutlleService.getPerDays(this.volunteersList, 5);
      this.Shabes = this._shutlleService.getPerDays(this.volunteersList, 6);
      this._shutlleService.getShuttle().subscribe(data => {
        this.editShuttle = data;
        this.form = new FormGroup({
          Sunday: new FormControl(this.Sunday),
          Monday: new FormControl(this.Monday),
          Tuesday: new FormControl(this.Tuesday),
          Wednesday: new FormControl(this.Wednesday),
          Thursday: new FormControl(this.Thursday),
          Friday: new FormControl(this.Friday),
          Shabes: new FormControl(this.Shabes)
        });
        this.flag=true;
      });
    });;

    
  }

  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Shabes'];

  saveScheduling = () => {
    this._volunteerService.getByIdFromServer(+this.form.get("Sunday")?.value).subscribe(data=>this.editShuttle[0]=data);
    this._volunteerService.getByIdFromServer(+this.form.get("Monday")?.value).subscribe(data=>this.editShuttle[1]=data);
    this._volunteerService.getByIdFromServer(+this.form.get("Tuesday")?.value).subscribe(data=>this.editShuttle[2]=data);
    this._volunteerService.getByIdFromServer(+this.form.get("Wednesday")?.value).subscribe(data=>this.editShuttle[3]=data);
    this._volunteerService.getByIdFromServer(+this.form.get("Thursday")?.value).subscribe(data=>this.editShuttle[4]=data);
    this._volunteerService.getByIdFromServer(+this.form.get("Friday")?.value).subscribe(data=>this.editShuttle[5]=data);
    this._volunteerService.getByIdFromServer(+this.form.get("Shabes")?.value).subscribe(data=>this.editShuttle[6]=data);
    
    // this.editShuttle[1]=this.form.get("Monday")?.value;
    // this.editShuttle[2]=this.form.get("Tuesday")?.value;
    // this.editShuttle[3]=this.form.get("Wednesday")?.value;
    // this.editShuttle[4]=this.form.get("Thursday")?.value;
    // this.editShuttle[5]=this.form.get("Friday")?.value;
    // this.editShuttle[6]=this.form.get("Shabes")?.value;
    // console.log(JSON.stringify(this.editShuttle));
    
    this._shutlleService.saveShuttle(this.editShuttle);
  }

  volunteersForDay = (day: number): Volunteer[] => {
    switch (day) {
      case 0:
        return this.Sunday;
      case 1:
        return this.Monday;
      case 2:
        return this.Tuesday;
      case 3:
        return this.Wednesday;
      case 4:
        return this.Thursday;
      case 5:
        return this.Friday;
    }
    return this.Shabes;
  }

}
