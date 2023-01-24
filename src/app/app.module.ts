import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './user/header/header.component';
import { FooterComponent } from './user/footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SecurityUserService } from './services/user/security-user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CertificatComponent } from './certificat/certificat.component';
import { ListCertificatComponent } from './certificat/list-certificat/list-certificat.component';
import { SearchCertificatComponent } from './certificat/search-certificat/search-certificat.component';
import { EditCertificatComponent } from './certificat/edit-certificat/edit-certificat.component';
import { InscriptionCertificatComponent } from './certificat/inscription-certificat/inscription-certificat.component';
import { SearchCertificatService } from './services/certificat/search-certificat.service';
import { CertificatService } from './services/certificat/certificat.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './services/user/profile.service';
import { EditerProfileComponent } from './profile/editer-profile/editer-profile.component';
import { AdminSignInComponent } from './admin/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './admin/admin-sign-up/admin-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UserComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    NotfoundComponent,
    CertificatComponent,
    ListCertificatComponent,
    SearchCertificatComponent,
    EditCertificatComponent,
    InscriptionCertificatComponent,
    ProfileComponent,
    EditerProfileComponent,
    AdminSignInComponent,
    AdminSignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [SecurityUserService,
              SearchCertificatService,
              CertificatService,
              ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
