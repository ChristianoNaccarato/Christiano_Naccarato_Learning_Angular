import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { OnlineStore } from '../Shared/store';
import { PRODUCTLIST } from '../data/mock-content'; // Import the array

// New interface for products
export interface Products {
  Product: string;
  Store: string;
  ProductID: number;
  Price: number;
}

@Component({
  selector: 'app-product-list',
  imports: [NgForOf, ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // Use imported data
  productList = PRODUCTLIST;
  //Catch the onclick event from the html
  selectedProduct?: Products;
  //function to set which product to display
  selectProduct(product: Products): void {
    this.selectedProduct = product;
  }
}
