import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CertificatService } from '../../services/certificat/certificat.service';
import { Certificat } from '../../modele/certificat/certificat';
import { Subscription } from 'rxjs';
import { User } from '../../modele/user/user';
import { SecurityUserService } from '../../services/user/security-user.service';

@Component({
  selector: 'app-list-certificat',
  templateUrl: './list-certificat.component.html',
  styleUrls: ['./list-certificat.component.css']
})
export class ListCertificatComponent implements OnInit {

  listofcertificat!: Certificat[];

  CertificatSubscription?: Subscription;

  inscription(id:number|any){
    console.log("Certificat : "+id)
    console.log("User : "+this.userService.CurrentUTILISATEUR!.userEmail)
    this.certificatService.InscriptionCertificat(this.userService.CurrentUTILISATEUR!.userEmail,id).subscribe((arg)=>{console.log(arg)})
    this.router.navigate(['profile'])
  }


  constructor(public certificatService: CertificatService,
              public userService: SecurityUserService,
              public router: Router) { }

  ngOnInit(): void {

    this.CertificatSubscription = this.certificatService.getListofCertificat().subscribe(
      (listofcertificat : Certificat[]|any) =>{this.listofcertificat = listofcertificat}
    );

  }



  onViewcertificat(id: number){
    this.router.navigate(['/certificat', 'view', id]);
  }

}
