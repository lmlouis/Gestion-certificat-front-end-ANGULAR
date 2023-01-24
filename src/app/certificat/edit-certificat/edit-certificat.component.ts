import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityUserService } from 'src/app/services/user/security-user.service';
import { Certificat } from '../../modele/certificat/certificat';
import { CertificatService } from '../../services/certificat/certificat.service';
import { ProfileService } from '../../services/user/profile.service';

@Component({
  selector: 'app-edit-certificat',
  templateUrl: './edit-certificat.component.html',
  styleUrls: ['./edit-certificat.component.css']
})
export class EditCertificatComponent implements OnInit {

  certificat:Certificat|any

  OnSubmit() {
    console.log(this.certificatformGroup.value)
    console.log(this.certificatformGroup.status)
    const formValues = this.certificatformGroup.value
    this.certificatService.CurrentCertificat.certificatIntittule=formValues['certificatIntittule']
    this.certificatService.CurrentCertificat.certificatDate = formValues['certificatDate']
    this.certificatService.CurrentCertificat.certificatText = formValues['certificatText']
    if(formValues['certifcatIsvalided']=="true")
      this.certificatService.CurrentCertificat.certifcatIsvalided = true
    else if(formValues['certifcatIsvalided']=="false")
      this.certificatService.CurrentCertificat.certifcatIsvalided = false

    this.certificatService.creerCertificat(this.certificatService.CurrentCertificat).subscribe((message)=>{console.log(message)})
    this.router.navigate(['membre'])
  }

  certificatformGroup!: FormGroup;

  initForm(){
    this.certificatformGroup=this.formBuilder.group({

    certificatIntittule: ["Nom certificat"
                ,[Validators.required
                , Validators.maxLength(120)
                ]],
    certificatDate: ["jj/mm/aaa"
                  ,[Validators.required
                  , Validators.maxLength(120)
                  ]],
    certificatText: [""
                    ,[Validators.required
                    , Validators.maxLength(255)
                    ]],
    certifcatIsvalided: false,
    certificatURL: [""
                        ,[
                        , Validators.maxLength(255)
                        ]],
    })
  }

  constructor(
    public formBuilder:FormBuilder,
    public certificatService:CertificatService,
    public profileService:ProfileService,
    public router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }

}
