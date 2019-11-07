import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
  

export class CategoryService {
  [x: string]: any;

  constructor(private db: AngularFireDatabase) { }

  getAll(){
    return this.db.list('/categories', {
    query: {
      orderByChild: 'name'
    }

    });

  }
}
