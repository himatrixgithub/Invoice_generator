import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../../services/customer.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
  customer:any;
  service:any;
  price:any;
  status:any;
  due:any;
  constructor(private customerService:CustomerService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
  }
  onAddSubmit(){
    this.customer = this.route.snapshot.params['customer_id'];
    let invoice ={
      customer : this.customer,
      service : this.service,
      price: this.price,
      status: this.status,
      due: this.due
    }
    this.customerService.saveInvoice(invoice).subscribe((invoice:any) =>{
      this.router.navigate(['/']);
    });
  }
}
