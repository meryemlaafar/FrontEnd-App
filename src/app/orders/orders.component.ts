import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  bills: any;
  productItems: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get("http://localhost:8888/BILLING-SERVICE/api/bills/1/productItems").subscribe({
      next: (data: any) => {
        this.bills=data;
        this.productItems = data._embedded.productItems || [];
      },
      error: (err)=>{

      }
    });
  }


}

