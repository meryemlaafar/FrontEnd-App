import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;  // Initialise avec un tableau vide

  constructor(private http: HttpClient) {}

      ngOnInit() {
        this.http.get("http://localhost:8888/INVENTORY-SERVICE/api/products").subscribe({
          next : (data)=>{
            this.products=data;
          },
          error: (err)=>{}
        });
      }

}
