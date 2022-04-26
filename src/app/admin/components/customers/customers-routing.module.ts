import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CustomersListComponent} from './customers-list/customers-list.component';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import{ CustomersAddComponent } from './customers-add/customers-add.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersSearchComponent } from './customers-search/customers-search.component'


const routes: Routes = [
  {path: '' , component : CustomersListComponent},
  {path: 'view/:id', component:CustomersViewComponent},
  {path: 'add' , component: CustomersAddComponent},
  {path: 'edit/:id', component:CustomersEditComponent},
  {path: 'search', component:CustomersSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
