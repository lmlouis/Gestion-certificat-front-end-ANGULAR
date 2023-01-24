import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from '../../modele/user/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  CurrentProfile!:Profile

  constructor(private httpClient: HttpClient) { }

  getMyProfile(userEmail:string): Observable<any>{
    return this.httpClient.get(`${environment.apiUri}/${environment.prefix}/user/profile?email=${userEmail}`);
  }

  editerProfile(id?:number,user?:Profile): Observable<any>{
    return this.httpClient.put(`${environment.apiUri}/${environment.prefix}/user/${id}`,user);
  }

}
