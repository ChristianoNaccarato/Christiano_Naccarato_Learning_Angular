import { Injectable } from '@angular/core';
import { Products } from '../product-list/product-list.component';
import { PRODUCTLIST } from '../data/mock-content';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = PRODUCTLIST;

  constructor() {

  }

  // Return all products
  getProducts(): Observable<Products[]> {
    return of(this.products);
  }
}

