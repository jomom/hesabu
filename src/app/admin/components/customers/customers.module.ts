import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomersAddComponent } from './customers-add/customers-add.component';
import { CustomersEditComponent } from './customers-edit/customers-edit.component';
import { CustomersSearchComponent } from './customers-search/customers-search.component';
import { CustomersDeleteComponent } from './customers-delete/customers-delete.component';


@NgModule({
  declarations: [
    CustomersListComponent,
    CustomersAddComponent,
    CustomersEditComponent,
    CustomersSearchComponent,
    CustomersDeleteComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CustomersModule { }
