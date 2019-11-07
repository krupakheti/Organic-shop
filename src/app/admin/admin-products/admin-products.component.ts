import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  
  
  products$;

  constructor(private ProductService: ProductService) {
      this.products$= this.ProductService.getAll();

   }

   ngOnDestroy(){
     
   }
        
  ngOnInit() {
  }

}
