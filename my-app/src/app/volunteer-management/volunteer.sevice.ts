import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Volunteer } from "./volunteer.model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VolunteerService {

    constructor(private _http: HttpClient) {

    }

    getAllVolunteersFromServer = (): Observable<Volunteer[]> => {
        let list = this._http.get<Volunteer[]>("api/Volunteers");
        console.log(list);

        return list;
    }

    getByIdFromServer = (id: number): Observable<Volunteer> => {
        let volunteer = this._http.get<Volunteer>(`api/Volunteers/${id}`);
        console.log(volunteer);
        return volunteer;
    }

    putVolunteer = (volunteer?: Volunteer) => {
        console.log(`putVolunteer()   ${volunteer?.name} address: ${volunteer?.address}  id: ${volunteer?.id} ${volunteer?.wantArr} `);
        
        let schedule: Volunteer[] = [];
        try {
            this._http.get<Volunteer[]>('/api/Scheduling').subscribe(async data => {
                schedule = data;
                for (let i = 0; i < 7; i++) {
                    if (volunteer?.id == schedule[i].id && !volunteer?.wantArr[i]) {
                        console.log("bampa");
                        alert("You are already embedded on the day designated for deletion. Please arrange the placement and then save the changes.");
                        throw new Error("You are already embedded on the day designated for deletion. Please arrange the placement and then save the changes.");
                    }
                }
                return this._http.put<Volunteer>(`/api/Volunteers/${volunteer?.id}`, volunteer).subscribe(data => console.log(`put: ${JSON.stringify(data)}`)

                );
            });


        } catch (err) {
            console.error();
        }
    }

}