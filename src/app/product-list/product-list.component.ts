import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { OnlineStore } from '../Shared/store';
import { PRODUCTLIST } from '../data/mock-content'; // Import the array
import { ProductService } from '../services/product.service';
import { NgOptimizedImage} from '@angular/common';
// New interface for products
export interface Products {
  Product: string;
  Store: string;
  ProductID: number;
  Price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  imports: [NgForOf, ProductListItemComponent, NgOptimizedImage],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent implements OnInit {


  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    // Fetch and init our data
    this.productService.getProducts().subscribe({
      next: (data: Products[]) => this.productList = data,
      error: err => console.error('Error fetching products', err),
      complete: () => console.log('Product data fetch complete!')
    });
  }

  // Use imported data
  productList = PRODUCTLIST;
  //Catch the onclick event from the html
  selectedProduct?: Products;
  //function to set which product to display
  selectProduct(product: Products): void {
    this.selectedProduct = product;
  }
}
