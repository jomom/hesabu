import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment.dev'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor( private httpClient : HttpClient) { }

  //Backend Methods
  getCustomers( ){
    let  url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_ALL_CUSTOMERS;
    return this.httpClient.get(url)
  }

  viewCustomer(id : any): Observable<any>{
     let  url = environment.CUSTOMER_BASE_URL + environment.CUSTOMER.GET_CUSTOMER_DETAILS;
     return this.httpClient.get(url)
  }

  editCustomer(id :  any ,customerObj : any){

  }

  deleteCustomer(id : any){

  }

  searchCustomer(keyword : any){

  }
}
