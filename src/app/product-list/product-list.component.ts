import { Component, OnInit } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { ProductService } from '../services/product.service';
import { Router } from "@angular/router";

// Interface for products
export interface Products {
  Product: string;
  Store: string;
  ProductID: number;
  Price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf, ProductListItemComponent, NgOptimizedImage],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: Products[] = [];
  selectedProduct?: Products;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch and init our data
    this.productService.getProducts().subscribe({
      next: (data: Products[]) => this.products = data,
      error: err => console.error('Error fetching products', err),
      complete: () => console.log('Product data fetch complete!')
    });
  }

  // If edit products is clicked it grabs the id then directs to the modify product page
  editProduct(id: number): void {
    this.router.navigate(['/modify-product', id]);
  }

  // If add product is clicked it navigates to the modify product page
  addProduct() {
    this.router.navigate(['/modify-product'])
}

  // If delete product it clicked it grabs the id then runs the deleteProduct method
  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(updatedList => {
      this.products = updatedList; // update local list after deletion
    });
  }

  selectProduct(product: Products): void {
    this.selectedProduct = product;
  }
}
