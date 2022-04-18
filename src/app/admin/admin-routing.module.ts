import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AccountSetupComponent } from './components/account-setup/account-setup.component';
import { AdminContentComponent } from './components/admin-dashboard/admin-content/admin-content.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {path: 'home' , component: AdminContentComponent},
      { path: 'account_setup', component: AccountSetupComponent },
      {
        path: 'products',
        loadChildren: () =>
          import('./components/products/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'customers',
        loadChildren: () =>
          import('./components/customers/customers.module').then((m) => m.CustomersModule),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./components/support/support.module').then((m) => m.SupportModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./components/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./components/settings/settings.module').then((m) => m.SettingsModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
