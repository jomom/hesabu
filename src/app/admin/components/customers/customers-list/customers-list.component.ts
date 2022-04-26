import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from '../../../../services/customer.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {


  customers: any;
  customersList: any;
  // data : any;

  constructor( private customerService : CustomerService ) {
    this.getCustomerList();

   }

  ngOnInit(): void {  }

  getCustomerList(){
    this.customerService.getCustomers().subscribe( (data)  => {
      this.customersList = data;
      this.customers = this.customersList.customers;
      console.log(this.customers);
    });
  }

  

}
