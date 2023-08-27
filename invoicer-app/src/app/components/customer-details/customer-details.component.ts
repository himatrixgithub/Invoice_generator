import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  id: any;
  customer: any;
  invoices: Invoice[];
  constructor(private customerService:CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.customerService.getCustomer(this.id).subscribe(customer => {
      this.customer = customer;
    });

    this.customerService.getInvoices(this.id).subscribe((invoices:any) => {
      this.invoices = invoices;
    });
  }
  markPaid(id:any, invoice:any){
    invoice.status = 'paid';
    this.customerService.markPaid(id, invoice).subscribe((invoice:any) => {
      invoice.status = 'paid'
    });
  }

  onDeleteClick(id:any){
    this.customerService.deleteInvoice(id).subscribe((invoice:any) => {
      window.location.reload();
    });
  }

}

export interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  company: string,
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
}

export interface Invoice{
  _id: string;
  customer: string;
  service: string;
  price: string;
  status: string;
  due: Date;
  created_at: Date;
}

