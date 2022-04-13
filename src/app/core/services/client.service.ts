import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../store/schemas/app.schema';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  addToCart(productId: string): Observable<any> {
    return this.http.post('/cart', { productId });
  }

  getOrders(userId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`/orders/${userId}`);
  }

  toOrder(orderList: Product[]): Observable<any> {
    return this.http.post('/orders', { orderList });
  }
}
