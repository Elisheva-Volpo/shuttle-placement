import { Injectable } from "@angular/core";
import { Volunteer } from "../volunteer-management/volunteer.model";
import { VolunteerService } from "../volunteer-management/volunteer.sevice";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()

export class ShuttleService {

    volunteers: Volunteer[] = [];

    constructor(private volunteerService: VolunteerService, private _http: HttpClient) {

    }

    getVolunteers = ():Observable< Volunteer[]> => {

        return this.volunteerService.getAllVolunteersFromServer();

    }
    getPerDays = (volunteerList:Volunteer[],day: number): Volunteer[] => {
        console.log("getPerDay");
        

        return volunteerList.filter(v => v.wantArr[day]);

    }

    saveShuttle = (volunteers: Volunteer[]) => {
        console.log("saveShuttle: "+volunteers);
        this._http.put<Volunteer[]>("/api/Scheduling", volunteers).subscribe(data=>console.log("koko"+data)
        );

    }

    getShuttle = (): Observable<Volunteer[]> => {

        return this._http.get<Volunteer[]>("/api/Scheduling");

    }

}