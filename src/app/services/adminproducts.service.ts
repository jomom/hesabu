import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs'
import { catchError,map } from 'rxjs/operators'
import { IProduct } from '../interfaces/product'
import { environment } from '../../environments/environment.dev'
interface IProductData {
  products: [
  {
    _id: string,
    productname: string,
    productdesc: string,
    productprice: number,
    productqty: number,
    productavail: boolean,
    unlimited: boolean,
    createdAt: Date 
  }
  ]
}


@Injectable({
  providedIn: 'root'
})

export class AdminproductsService {

  constructor(private httpClient : HttpClient) { }

  /*Backend Methods*/
  getProducts(){
    let url = environment.ADMINPRODUCTS_BASE_URL + environment.ADMINPRODUCTS.GET_ALL_PRODUCTS;
     return this.httpClient.get(url)
  }

}
