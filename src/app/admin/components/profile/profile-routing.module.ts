import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileGeneralComponent } from './profile-general/profile-general.component'

const routes: Routes = [
 { path: 'general' , component: ProfileGeneralComponent},
 { path: '',   redirectTo: '/admin/profile/general', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
