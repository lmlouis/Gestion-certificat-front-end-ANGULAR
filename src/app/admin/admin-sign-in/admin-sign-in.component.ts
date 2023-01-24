import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modele/user/user';
import { SecurityUserService } from 'src/app/services/user/security-user.service';
import { ProfileService } from '../../services/user/profile.service';

@Component({
  selector: 'app-admin-sign-in',
  templateUrl: './admin-sign-in.component.html',
  styleUrls: ['./admin-sign-in.component.css']
})
export class AdminSignInComponent implements OnInit {

  OnSubmit(form: NgForm) {
    const email=form.value['email']
    const pwd = form.value['password']
    this.signIn(email, pwd)
    this.IsSubmited=true
    this.securityUserService.CurrentUTILISATEUR=new User(email,pwd)

  }
  messageAuth:string=""
  IsSubmited:boolean=false

  constructor(public securityUserService:SecurityUserService,
    public router: Router,
    public profileService:ProfileService) { }


  signIn(email:string, password:string){
    let msg = this.securityUserService.signInAdmin(new User(email, password))
    msg.subscribe((message:string)=>{this.setMessage(message)})
  }

  setMessage(msg:string){
    this.messageAuth=msg
    console.log(this.messageAuth)
    if(this.messageAuth.startsWith("Accès accordé")){
      this.securityUserService.isLoggedIn=true
      this.securityUserService.messageAuth=msg
      this.router.navigate(["profile"])
    }
  }

  ngOnInit(): void {

  }


}
