import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { AdminComponent } from '../admin/admin.component';
import { AdminSignInComponent } from '../admin/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from '../admin/admin-sign-up/admin-sign-up.component';

const routes: Routes = [
  {path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  {path: 'acceuil',  component:  HomeComponent},
  {path: '', loadChildren: ()=>import("./user-route/user-route-routing.module").then((p)=>p.UserRouteRoutingModule)},
  {path: 'not-found', component: NotfoundComponent},
  {path: '**', redirectTo:'/not-found'}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
