import { Component, OnInit } from '@angular/core';
import { NgForOf, NgOptimizedImage } from '@angular/common';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { ProductService } from '../services/product.service';
import { Router } from "@angular/router";
import {LowerCasePipe} from '@angular/common';
import {CurrencyPipe} from '@angular/common';
import {UpperCasePipe} from '@angular/common';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';

// Interface for products
export interface Products {
  id: number;
  Product: string;
  Store: string;
  Price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgForOf, ProductListItemComponent, NgOptimizedImage, LowerCasePipe, CurrencyPipe, UpperCasePipe, HoverHighlightDirective],
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
    this.productService.getProducts().subscribe({
      next: (data: Products[]) => {
        this.products = data;
      },
      error: err => console.error('Error fetching products', err),
      complete: () => console.log('Product data fetch complete!')
    });
  }

  editProduct(id: number): void {
    this.router.navigate(['/modify-product', id]);
  }

  addProduct() {
    this.router.navigate(['/modify-product']);
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe({
      next: () => {
        // remove product from array manually
        this.products = this.products.filter(p => p.id !== id);
      },
      error: err => console.error("Delete failed:", err)
    });
  }

  selectProduct(product: Products): void {
    this.selectedProduct = product;
  }
}

