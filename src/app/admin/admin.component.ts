import { ProfileService } from 'src/app/services/user/profile.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../modele/user/user';
import { SecurityUserService } from '../services/user/security-user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {



  constructor(
    public formbuilder: FormBuilder,
    public securityUserService:SecurityUserService,
    public router: Router,
    public profileService:ProfileService) { }




  ngOnInit(): void {
  }

}
