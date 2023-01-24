import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modele/user/user';
import { SecurityUserService } from 'src/app/services/user/security-user.service';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.css']
})
export class AdminSignUpComponent implements OnInit {

  OnSubmit() {
    console.log(this.AdminformGroup.value)
    console.log(this.AdminformGroup.status)
    const formValues = this.AdminformGroup.value
    const email=formValues['email']
    const pwd = formValues['password']
    this.signUpAdmin(email, pwd)
    this.IsSubmited=true
  }
  messageAuth:string=""
  IsSubmited:boolean=false
  AdminformGroup!: FormGroup;
  initForm(){
    this.AdminformGroup=this.formbuilder.group({
      email: ['example@email.com'
              ,[Validators.required
              , Validators.email
              , Validators.minLength(5)
              , Validators.maxLength(45)
              ]],
   password: ['Mot de passe'
              ,[ Validators.required
              , Validators.pattern(/[a-z]?[A-Z]?[0-9]?[$-/:-?{-~!^_@`\[\]]/)
              , Validators.minLength(6)
              , Validators.maxLength(20)
              ]],
    })
  }

  constructor(
    public formbuilder: FormBuilder,
    public securityUserService:SecurityUserService,
    public router: Router) { }


    signUpAdmin(email:string, password:string){
    let msg = this.securityUserService.signUpAdmin(new User(email, password))
    msg.subscribe((message:string)=>{this.setMessage(message)
                                    if(message.startsWith("A",0)){console.log(message)}})
  }

  setMessage(msg:string){
    this.messageAuth=msg
    this.IsSubmited=true
  }

  ngOnInit(): void {
    this.initForm()
  }

}
