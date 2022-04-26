import { Component, OnInit } from '@angular/core';
import { IProduct }  from '../../../../interfaces/product'
import { AdminproductsService } from '../../../../services/adminproducts.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  // products: IProduct
     products: any
     productsList : any

  constructor( private adminProductservice : AdminproductsService ) { 
    this.getProductsList();
   }

  ngOnInit(): void {  }


  getProductsList(){
    this.adminProductservice.getProducts().subscribe((data) => {
      this.productsList  = data
      this.products= this.productsList.products
      console.log(this.products)
    })
  }

}
