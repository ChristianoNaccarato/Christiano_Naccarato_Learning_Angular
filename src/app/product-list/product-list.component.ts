import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {ProductListItemComponent} from '../product-list-item/product-list-item.component';
import {OnlineStore} from '../Shared/store';
// New interface for products
export interface Products {
  Product: string;
  Store: string;
  ProductID: number;
  Price: number;
}
@Component({
  selector: 'app-product-list',
  imports: [
    NgForOf,
    ProductListItemComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // Product list
  productList:Products[] =[
    { Product: 'Apple', Store: 'Wallmart', ProductID: 1213, Price: 1 },
    { Product: 'Tire', Store: 'American Tire', ProductID: 6167, Price: 50 },
    { Product: 'Dog food', Store: 'Pet Food', ProductID: 6515, Price: 35 },
    { Product: 'T-Shirt', Store: 'Best Clothing', ProductID: 4415, Price: 20 }
  ];
  //Catch the onclick event from the html
  selectedProduct?: Products;
  //function to set which product to display
  selectProduct(product: Products): void {
    this.selectedProduct = product;
  }

}
