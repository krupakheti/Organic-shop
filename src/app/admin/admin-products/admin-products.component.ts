import { Product } from './../../models/product';
import { ProductService } from './../../product.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  
  products: Product[];
  filteredProducts: any[];

  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[];
  itemCount : number;




  constructor(private ProductService: ProductService) {
     this.subscription =  this.ProductService.getAll().subscribe(products =>{
              this.filteredProducts = this.products = products;
              this.tableResource = new DataTableResource(products);
              this.tableResource.query({offset: 0 })
                .then(items => this.items = items);
              this.tableResource.count()
                .then (count => this.itemCount = count);  // all about initializing the data-table

     });
         

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


