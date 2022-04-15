import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/store/schemas/app.schema';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('/products');
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`/products`, { product });
  }

  removeProduct(productId: string): Observable<any> {
    return this.http.delete(`/products/${productId}`);
  }
}
