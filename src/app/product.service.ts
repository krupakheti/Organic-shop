import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  static getAll(): any {
    throw new Error("Method not implemented.");
  }

  constructor(private db: AngularFireDatabase) { }

  create(product) { 
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products');
  }
  
  get(productId) { 
    return this.db.object('/products/' + productId);
  }
  
  update(productId, product){
    return this.db.object('/products/' + productId).update(product);

  }

  delete (productId) {

    return this.db.object('/products/' + productId). remove();
    
  }

  
}
