import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer.sevice';
import { Volunteer } from '../volunteer.model';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot, Router } from '@angular/router';


@Component({
  selector: 'app-edit-volunteer',
  templateUrl: './edit-volunteer.component.html',
  styleUrls: ['./edit-volunteer.component.scss']
})
export class EditVolunteerComponent implements OnInit {

  _volunteer: Volunteer = new Volunteer();
  value: number = 0;
  public get volunteer(): Volunteer | undefined {
    return this._volunteer
  }

  volunteerForm: FormGroup = new FormGroup({});

  constructor(private _volunteerSevice: VolunteerService, private _acr: ActivatedRoute, private _route: Router) {

  }

  ngOnInit(): void {
    this.value = +(this._acr.snapshot.paramMap.get('id') ?? '');
    this._volunteerSevice.getByIdFromServer(this.value).subscribe(
      data => {
        this._volunteer = data;
        console.log(this._volunteer);

        this.volunteerForm = new FormGroup({
          id: new FormControl(this._volunteer?.id, [Validators.min(1)]),
          name: new FormControl(this._volunteer?.name, [Validators.required, Validators.minLength(3)]),
          tel: new FormControl(this._volunteer?.tel, [Validators.required, Validators.minLength(9)]),
          address: new FormControl(this._volunteer?.address, [Validators.required,Validators.minLength(3)]),
          isActive: new FormControl(this._volunteer?.isActive),
          wantArrSunday: new FormControl(this._volunteer?.wantArr[0]),
          wantArrMonday: new FormControl(this._volunteer?.wantArr[1]),
          wantArrTuesday: new FormControl(this._volunteer?.wantArr[2]),
          wantArrWednesday: new FormControl(this._volunteer?.wantArr[3]),
          wantArrThurthday: new FormControl(this._volunteer?.wantArr[4]),
          wantArrFriday: new FormControl(this._volunteer?.wantArr[5]),
          wantArrShabes: new FormControl(this._volunteer?.wantArr[6]),
        });
        // מאותחל אפשר להתחיל עם הFormGroupרק אחרי שכל ה 
        //HTML
        this.flag = true;
      }
    );
    console.log(this._volunteer?.name);
  }
  flag: boolean = false;
  saveChanges = async () => {
    console.log(this.volunteerForm.value);

    this._volunteer.name = this.volunteerForm.get('name')?.value;
    this._volunteer.isActive = this.volunteerForm.get('isActive')?.value;
    this._volunteer.address = this.volunteerForm.get('address')?.value;
    this._volunteer.tel = this.volunteerForm.get('tel')?.value;
    this._volunteer.wantArr[0] = this.volunteerForm.get('wantArrSunday')?.value;
    this._volunteer.wantArr[1] = this.volunteerForm.get('wantArrMonday')?.value;
    this._volunteer.wantArr[2] = this.volunteerForm.get('wantArrTuesday')?.value;
    this._volunteer.wantArr[3] = this.volunteerForm.get('wantArrWednesday')?.value;
    this._volunteer.wantArr[4] = this.volunteerForm.get('wantArrThurthday')?.value;
    this._volunteer.wantArr[5] = this.volunteerForm.get('wantArrFriday')?.value;
    this._volunteer.wantArr[6] = this.volunteerForm.get('wantArrShabes')?.value;
    this._volunteer.wantArr.forEach(w=>{
      if(w==null){
        w=false;
      }
    });

    await this._volunteerSevice.putVolunteer(this._volunteer);
    //this._route.navigate(["/volunteers"]);
  }

}
