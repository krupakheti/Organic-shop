
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
Products: Product[] = [];
filteredProducts: Product[] = [];

category: string;


  constructor(
    
    route: ActivatedRoute,
    productService: ProductService
    ) { 

    productService
    .getAll()
    .switchMap(products => {
      this.Products = products;
      return route.queryParamMap;
    })

   .subscribe(params => {
      this.category=params.get('category');
      this.filteredProducts = (this.category)?
        this.Products.filter(p=> p.category === this.category):
        this.Products;

    });
    
  }
};



  
