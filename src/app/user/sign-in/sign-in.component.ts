import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../modele/user/user';
import { SecurityUserService } from '../../services/user/security-user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {


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
    public router: Router,) { }


  signIn(email:string, password:string){
    let msg = this.securityUserService.signIn(new User(email, password))
    msg.subscribe((message:string)=>{this.setMessage(message)})
  }

  setMessage(msg:string){
    this.messageAuth=msg
    if(this.messageAuth.startsWith("Accès accordé")){
      this.securityUserService.isLoggedIn=true
      this.securityUserService.messageAuth=msg
      this.router.navigate(["membre"])
    }
  }

  ngOnInit(): void {
  }

}
