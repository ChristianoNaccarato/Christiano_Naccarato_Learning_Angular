import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Products } from '../product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'api/products';

  constructor(private http: HttpClient) {}

  // get all products
  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // get product by ID
  getProductById(id: number): Observable<Products> {
    return this.http.get<Products>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // add new product
  addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(this.apiUrl, product).pipe(
      catchError(this.handleError)
    );
  }

  // update product
  updateProduct(product: Products): Observable<Products> {
    return this.http.put<Products>(`${this.apiUrl}/${product.id}`, product);
  }

  // delete product
  deleteProduct(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Error handling
  private handleError(error: any) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }
}
