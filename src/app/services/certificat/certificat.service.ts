import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Certificat } from '../../modele/certificat/certificat';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {
  creerCertificat(certificat: Certificat) {
    return this.httpClient.post(`${environment.apiUri}/${environment.prefix}/certificat`,certificat)
  }
  CurrentCertificat: Certificat=new Certificat();

  constructor(private httpClient: HttpClient) { }

  getListofCertificat(){
    return this.httpClient.get(`${environment.apiUri}/${environment.prefix}/certificat`)
  }

  viewOneCertificatbyId(certificatId:number){
    return this.httpClient.get(`${environment.apiUri}/${environment.prefix}/certificat/${certificatId}`)

  }

  InscriptionCertificat(candidatEamil:string,certificatId:number){
    return this.httpClient.post(`${environment.apiUri}/${environment.prefix}/certificat/inscription/${certificatId}?email=${candidatEamil}`,null)
  }
}
