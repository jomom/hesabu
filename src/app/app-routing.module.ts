import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component'
import { ForgotComponent} from './pages/forgot/forgot.component';
import { ResetComponent } from './pages/reset/reset.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'reset/:token', component: ResetComponent },
  { path: 'admin',
    loadChildren: () =>
     import ('./admin/admin.module').then((m) => m.AdminModule),
  },
  { path: '',component: HomepageComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
