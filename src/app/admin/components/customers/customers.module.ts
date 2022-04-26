import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersAddComponent } from './customers-add/customers-add.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersSearchComponent } from './customers-search/customers-search.component';
import { CustomersDeleteComponent } from './customers-delete/customers-delete.component';
import { CustomersViewComponent } from './customers-view/customers-view.component';


@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersAddComponent,
    CustomersEditComponent,
    CustomersSearchComponent,
    CustomersDeleteComponent,
    CustomersViewComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomersModule { }
