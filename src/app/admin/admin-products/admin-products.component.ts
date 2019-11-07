import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  
  products: {title: string}[];
  filteredProducts: any[];

  subscription: Subscription;


  constructor(private ProductService: ProductService) {
     this.subscription =  this.ProductService.getAll().subscribe(products => this.products = products);
         

   }

  filter(query: string){
    this.filteredProducts = (query)?
    this.products.filter(p=> p.title.toLowerCase().includes(query.toLocaleLowerCase())) : 
    this.products;
  }



   ngOnDestroy(){
          this.subscription.unsubscribe();
   }
        
  ngOnInit() {
  }

}
