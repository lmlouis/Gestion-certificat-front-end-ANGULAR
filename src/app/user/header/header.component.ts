import { Component, OnInit } from '@angular/core';
import { SecurityUserService } from '../../services/user/security-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
onSignOut() {
  this.userservice.signOut()
}

  constructor(public userservice:SecurityUserService) { }

  ngOnInit(): void {
  }

}
