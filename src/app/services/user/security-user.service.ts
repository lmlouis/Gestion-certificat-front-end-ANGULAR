import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../modele/user/user';

@Injectable({
  providedIn: 'root'
})
export class SecurityUserService {
  signInAdmin(user:User): Observable<any>{
    return this.httpClient.post(`${environment.apiUri}/${environment.prefix}/security/login/admin`,user,{ responseType: 'text' });
  }

  signUpAdmin(user:User): Observable<any>{
    return this.httpClient.post(`${environment.apiUri}/${environment.prefix}/security/register/admin`,user)

  }
  isLoggedIn: boolean=false;
  messageAuth: String="";

  CurrentUTILISATEUR?:User

  constructor(private httpClient: HttpClient) { }

  signIn(user:User): Observable<any>{
    return this.httpClient.post(`${environment.apiUri}/${environment.prefix}/security/login`,user,{ responseType: 'text' });
  }

  signUp(user:User): Observable<any>{
    return this.httpClient.post(`${environment.apiUri}/${environment.prefix}/security/register`,user,{ responseType: 'text' })

  }
  signOut(){ // se déconnecter
    this.isLoggedIn=false;
  }
}
