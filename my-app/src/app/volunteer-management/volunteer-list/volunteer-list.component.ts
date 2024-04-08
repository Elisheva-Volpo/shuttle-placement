import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer.sevice';
import { Volunteer } from '../volunteer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.scss']
})
export class VolunteerListComponent implements OnInit{

  volunteerList$: Volunteer[] = [];

  constructor(private _volunteerService: VolunteerService,private _router:Router) {
     
  }

  ngOnInit(): void {
    this._volunteerService.getAllVolunteersFromServer().subscribe(data => {
      this.volunteerList$ = data;
      data.forEach(v => console.log(v)
      );
    });
  }

  routeToEdit = (id: number) => {
    this._router.navigate(['/volunteer',id]);
  }

}
