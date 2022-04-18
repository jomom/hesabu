import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsListComponent} from './products-list/products-list.component';

const routes : Routes = [
  {path: '' , component : ProductsListComponent},
  {path: 'addproduct' , component : ProductsCreateComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ProductsRoutingModule { }