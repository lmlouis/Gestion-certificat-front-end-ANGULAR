import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { toArray } from 'rxjs';
import { CertificatService } from 'src/app/services/certificat/certificat.service';
import { SearchCertificatService } from 'src/app/services/certificat/search-certificat.service';
import { SecurityUserService } from 'src/app/services/user/security-user.service';
import { Certificat } from '../../modele/certificat/certificat';

@Component({
  selector: 'app-search-certificat',
  templateUrl: './search-certificat.component.html',
  styleUrls: ['./search-certificat.component.css']
})
export class SearchCertificatComponent implements OnInit {
Inscription(arg0: any) {
throw new Error('Method not implemented.');
}
  list_certificate: Certificat[]|any;

  inscription(id:number|any){
    console.log("Certificat : "+id)
    console.log("User : "+this.userService.CurrentUTILISATEUR!.userEmail)
    this.certificatService.InscriptionCertificat(this.userService.CurrentUTILISATEUR!.userEmail,id).subscribe((arg)=>{console.log(arg)})
    this.router.navigate(['profile'])
  }

  OnSearch() {
    console.log(this.SearchCertificatformGroup.value)
    console.log(this.SearchCertificatformGroup.status)
    const formValues = this.SearchCertificatformGroup.value
    const name=formValues['name']


    this.SearchCertficate(name).subscribe((arg:Certificat[]|any) =>  {this.list_certificate = arg});

    console.log("La list_certificate : \n "+this.SearchCertficate(name))

  }
  SearchCertficate(name: string): any {
    return this.searchCertificatService.searchCertificat(name)
  }

  SearchCertificatformGroup!: FormGroup;
  initForm(){
    this.SearchCertificatformGroup=this.formbuilder.group({
      name: ''
    })
  }







  ngOnInit(): void {
    this.initForm()
  }

  constructor(public searchCertificatService:SearchCertificatService,
              public formbuilder: FormBuilder,
              public certificatService: CertificatService,
              public userService: SecurityUserService,
              public router: Router) { }



}
