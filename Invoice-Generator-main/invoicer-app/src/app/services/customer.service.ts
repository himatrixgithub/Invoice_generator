import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(){
    return this.http.get('http://localhost:3000/api/customers').pipe(map(res => res));
  }
  getCustomer(id:any){
    return this.http.get('http://localhost:3000/api/customers/'+id).pipe(map(res => res));
  }
  saveCustomer(customer:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(customer);
    return this.http.post('http://localhost:3000/api/customers', body,{'headers':headers})
  }

  updateCustomer(id:any, customer:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(customer);
    return this.http.put('http://localhost:3000/api/customers/'+id, body,{'headers':headers})
  }

  deleteCustomer(id:any){
    return this.http.delete('http://localhost:3000/api/customers/'+id).pipe(map(res => res));
  }

  getInvoices(customer_id:any){
    return this.http.get('http://localhost:3000/api/invoices/customer/'+customer_id).pipe(map(res => res));
  }

  markPaid(id:any, invoice:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(invoice);
    return this.http.put('http://localhost:3000/api/invoices/'+id, invoice,{'headers':headers});
  }

  deleteInvoice(id:any){
    return this.http.delete('http://localhost:3000/api/invoices/'+id).pipe(map(res => res));
  }
  saveInvoice(invoice:any){
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(invoice);
    return this.http.post('http://localhost:3000/api/invoices', body,{'headers':headers})
  }
}
