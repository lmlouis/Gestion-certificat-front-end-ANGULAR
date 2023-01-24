import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/user/profile.service';
import { SecurityUserService } from 'src/app/services/user/security-user.service';
import { Router } from '@angular/router';
import { Profile } from '../modele/user/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile!:Profile

  getProfileByEmail(){
    this.profileService.getMyProfile(this.userService.CurrentUTILISATEUR!.userEmail).subscribe((user)=>{
      this.profile=user
      this.profileService.CurrentProfile=user
    })
  }

  constructor(public profileService:ProfileService,
              public userService:SecurityUserService,
              public router:Router) { }

  ngOnInit(): void {
    this.getProfileByEmail()
  }

}
