import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatComponent } from '../../certificat/certificat.component';
import { EditCertificatComponent } from '../../certificat/edit-certificat/edit-certificat.component';

const routes: Routes = [
  {path: 'certificat', component: CertificatComponent},
  {path: 'edit-certificat', component: EditCertificatComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CertificatRouteRoutingModule { }
