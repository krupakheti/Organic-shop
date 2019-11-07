import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  static getCategories(): any {
    throw new Error("Method not implemented.");
  }

  constructor(private db: AngularFireDatabase) { }

  getCategories(){
    return this.db.list('/categories', {
    query: {
      orderByChild: 'name'
    }

    });

  }
}
