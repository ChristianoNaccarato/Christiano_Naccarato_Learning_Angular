import { Injectable } from '@angular/core';
import { Products } from '../product-list/product-list.component';
import { PRODUCTLIST } from '../data/mock-content';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products :Products[] = PRODUCTLIST;

  constructor() {

  }

  // All these methods were already added

  // Return all products
  getProducts(): Observable<Products[]> {
    return of(this.products);
  }

  // Add a new product
  addProduct(newProduct: Products): Observable<Products[]> {
    this.products.push(newProduct);
    return of(this.products);
  }

  // Update an existing product
  updateProduct(updatedProduct: Products): Observable<Products[]> {
    const index = this.products.findIndex(p => p.ProductID === updatedProduct.ProductID);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
    return of(this.products);
  }

  deleteProduct(productId: number): Observable<Products[]> {
    this.products = this.products.filter(p => p.ProductID !== productId);
    return of(this.products);
  }
  // Get a product by ID
  getProductById(id: number): Observable<Products | undefined> {
    const product = this.products.find(p => p.ProductID === id);
    return of(product);
  }
}

