import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../store/schemas/app.schema';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private http: HttpClient) {}

  addCategory(categoryName: string): Observable<any> {
    return this.http.post(`/categories`, { categoryName });
  }

  removeCategory(categoryId: string): Observable<any> {
    return this.http.delete(`/categories/${categoryId}`);
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`/products`, { product });
  }

  removeProduct(productId: string): Observable<any> {
    return this.http.delete(`/products/${productId}`);
  }

  getAllOrders(): Observable<Product[]> {
    return this.http.get<Product[]>('/orders');
  }
}
