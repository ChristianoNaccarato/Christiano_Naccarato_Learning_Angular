import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Products } from './product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const products= [
      { id: 1213, Product: 'Apple', Store: 'Wallmart', Price: 1, imageUrl: 'assets/images/apple.jpg' },
      { id: 6167, Product: 'Tire', Store: 'American Tire', Price: 50, imageUrl: 'assets/images/tire.jpg'},
      { id: 6515, Product: 'Dog food', Store: 'Pet Food', Price: 35, imageUrl: 'assets/images/dog_food.jpg' },
      { id: 4415, Product: 'T-Shirt', Store: 'Best Clothing', Price: 20, imageUrl: 'assets/images/T-shirt.jpg' }
    ];
    return { products };
  }

  // Tell in-memory API to use ProductID as the primary key
  getId(product: any) {
    return product.id;
  }

  // Auto-generate new ProductID on add
  genId(products: Products[]): number {
    return products.length > 0
      ? Math.max(...products.map(p => p.id)) + 1
      : 1;
  }
}

