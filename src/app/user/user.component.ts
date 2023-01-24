import { Component, OnInit } from '@angular/core';
import { SecurityUserService } from '../services/user/security-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  message: String="";
  isAuth=false

  constructor(public securityUserService:SecurityUserService) { }

  ngOnInit(): void {
    this.isAuth=this.securityUserService.isLoggedIn
    this.message=this.securityUserService.messageAuth

  }

}
