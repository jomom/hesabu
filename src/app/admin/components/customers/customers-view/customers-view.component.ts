import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CustomerService } from '../../../../services/customer.service';


@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.scss']
})
export class CustomersViewComponent implements OnInit {

  customerId: string = '';
  customerDetails: any;
  constructor( private activatedRoute:ActivatedRoute, 
               private customerService : CustomerService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.customerId = data['id'];
      console.log(this.customerId)
    })

    this.customerService.viewCustomer(this.customerId).subscribe( data => {
        this.customerDetails = data;
        console.log(this.customerDetails)
    })

  }

}
