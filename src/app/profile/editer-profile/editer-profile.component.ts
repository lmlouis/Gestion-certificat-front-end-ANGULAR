import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from 'src/app/modele/user/profile';
import { ProfileService } from 'src/app/services/user/profile.service';
import { SecurityUserService } from 'src/app/services/user/security-user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editer-profile',
  templateUrl: './editer-profile.component.html',
  styleUrls: ['./editer-profile.component.css']
})
export class EditerProfileComponent implements OnInit {

  profile!:Profile

  OnSubmit() {
    console.log(this.UserformGroup.value)
    console.log(this.UserformGroup.status)
    const formValues = this.UserformGroup.value
    this.profileService.CurrentProfile.userName=formValues['userName']
    this.profileService.CurrentProfile.userStatus= formValues['userStatus']
    this.profileService.editerProfile(this.profileService.CurrentProfile.userId, this.profileService.CurrentProfile)
    .subscribe((arg)=>{console.log(arg)})
  }

  UserformGroup!: FormGroup;

  initForm(){
    this.UserformGroup=this.formBuilder.group({

      userName: [this.profileService.CurrentProfile.userName
                ,[Validators.required
                , Validators.minLength(2)
                , Validators.maxLength(120)
                ]],
      userStatus: [this.profileService.CurrentProfile.userStatus
                  ,[ Validators.maxLength(120)
      ]]
    })
  }

  constructor(
    public formBuilder:FormBuilder,
    public profileService:ProfileService,
    public userService:SecurityUserService,
    public router:Router) { }

  ngOnInit(): void {
    this.initForm()
  }

}
