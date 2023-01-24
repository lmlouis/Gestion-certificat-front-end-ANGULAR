import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/modele/user/user';
import { SecurityUserService } from '../../services/user/security-user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit{
  OnSubmit() {
    console.log(this.UserformGroup.value)
    console.log(this.UserformGroup.status)
    const formValues = this.UserformGroup.value
    const email=formValues['email']
    const pwd = formValues['password']
    this.signup(email, pwd)
    this.IsSubmited=true
  }
  messageAuth:string=""
  IsSubmited:boolean=false
  UserformGroup!: FormGroup;
  initForm(){
    this.UserformGroup=this.formbuilder.group({
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


  signup(email:string, password:string){
    let msg = this.securityUserService.signUp(new User(email, password))
    msg.subscribe((message:string)=>{this.setMessage(message)
                                    if(message.startsWith("C",0)){this.router.navigate(['/sign-in'])}})
  }

  setMessage(msg:string){
    this.messageAuth=msg
    this.IsSubmited=true
  }

  ngOnInit(): void {
    this.initForm()
  }

}
