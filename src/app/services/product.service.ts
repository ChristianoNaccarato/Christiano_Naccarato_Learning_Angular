import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PRODUCTLIST} from '../data/mock-content';
import {Products} from '../product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'api/products'; // url to web api
  private products: Products[] = PRODUCTLIST; // Local copy of products for CRUD Operations

  constructor(private http: HttpClient) {}

  // Get all products
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // Get a single product by ID
  getProductById(id: number): Observable<Products> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Products>(url).pipe(catchError(this.handleError));
  }

  // Add a new product
  addProduct(product: Products): Observable<Products> {
    product.ProductID = this.generateNewId();
    return this.http.post<Products>(this.apiUrl, product).pipe(catchError(this.handleError));
  }

  // Edit an existing product
  updateProduct(product: Products): Observable<Products> {
    const url = `${this.apiUrl}/${product.ProductID}`;
    return this.http.put<Products>(url, product).pipe(catchError(this.handleError));
  }

  // Remove a product
  deleteProduct(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  // Generate a new unique ProductID
  private generateNewId(): number {
    return this.products.length > 0
      ? Math.max(...this.products.map(p => p.ProductID)) + 1 : 1;
  }

  // Handle server errors
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again later.'));
  }
}
