import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Certificat } from '../../modele/certificat/certificat';

@Injectable({
  providedIn: 'root'
})
export class SearchCertificatService {

  constructor(private httpClient: HttpClient) { }

  searchCertificat(intitule:string){
    return this.httpClient.get(`${environment.apiUri}/${environment.prefix}/search/certificat?name=${intitule}`)
  }
}
