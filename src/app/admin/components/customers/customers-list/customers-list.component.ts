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

  customerResult: any;
  customerList: any;
  // data : any;

  constructor( private customerService : CustomerService ) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList(){
    this.customerService.getCustomers().subscribe( customerListResponse  => {
        this.customerResult = customerListResponse;
        this.customerList = this.customerResult.results;
        console.log(this.customerList);
    });

  }

}
