import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AccountSetupComponent } from './components/account-setup/account-setup.component';
import { AdminContentComponent } from './components/admin-dashboard/admin-content/admin-content.component';
import { SupportComponent } from './components/support/support.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AccountSetupComponent,
    AdminContentComponent,
    SupportComponent, 
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
