import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProductsRoutingModule } from './product-routing.module';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
    declarations : [
        ProductsCreateComponent,
        ProductsListComponent
    ],
    imports:[
        CommonModule,
        ProductsRoutingModule,
        FormsModule,
        CKEditorModule
    ]
})

export class ProductModule {}

