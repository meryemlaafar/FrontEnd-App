import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit{
   customers: any;
  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    this.http.get("http://localhost:8888/CUSTOMER-SERVICE/api/customers").subscribe({
      next : (data)=>{
        this.customers=data;
      },
      error: (err)=>{}
    });
  }
  // Method to handle viewing orders for a specific customer
  viewOrders(customerId: number): void {
    console.log('Viewing orders for customer ID:', customerId);
    // Implement the logic to view orders for this customer
  }

  // Method to handle deleting a customer
  deleteCustomer(customerId: number): void {
    console.log('Deleting customer ID:', customerId);
    // Implement the logic to delete this customer
  }

  getOrders(c: any) {

  }
}
