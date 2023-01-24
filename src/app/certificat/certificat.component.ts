import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/user/profile.service';
import { Profile } from '../modele/user/profile';

@Component({
  selector: 'app-certificat',
  templateUrl: './certificat.component.html',
  styleUrls: ['./certificat.component.css']
})
export class CertificatComponent implements OnInit {
  currentUser !: Profile
  constructor(public ProfileService:ProfileService) { }

  ngOnInit(): void {
    this.currentUser=this.ProfileService.CurrentProfile
  }

}
