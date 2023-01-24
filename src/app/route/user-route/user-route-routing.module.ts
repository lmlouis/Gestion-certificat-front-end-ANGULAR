import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../../user/sign-in/sign-in.component';
import { SignUpComponent } from '../../user/sign-up/sign-up.component';
import { UserComponent } from '../../user/user.component';
import { UserGuardGuard } from '../guard/user-guard.guard';
import { ProfileComponent } from '../../profile/profile.component';
import { EditerProfileComponent } from 'src/app/profile/editer-profile/editer-profile.component';
import { AdminComponent } from 'src/app/admin/admin.component';
import { AdminSignInComponent } from 'src/app/admin/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from 'src/app/admin/admin-sign-up/admin-sign-up.component';


const routes: Routes = [
  {path: 'membre',canActivate: [UserGuardGuard], component: UserComponent,},
  {path: 'profile',canActivate: [UserGuardGuard], component: ProfileComponent,
   children:[
    {path: 'editer',canActivate: [UserGuardGuard], component: EditerProfileComponent,}
   ]},
   {path: 'admin',  component:  AdminComponent,
   children: [   {path:"admin/sign-in", component:AdminSignInComponent},
                 {path:"admin/sign-up", component:AdminSignUpComponent},]},


  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: '', loadChildren: ()=>import("../../route/certificat-route/certificat-route-routing.module").then((p)=>p.CertificatRouteRoutingModule)},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouteRoutingModule { }
