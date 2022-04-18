import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/core/models';

@Injectable()
export class CartService {
  
  constructor(private http: HttpClient) {}

  addToCart(productId: string): Observable<Cart> {
    return this.http.post<Cart>('/cart', { productId });
  }

  removeFromCart(productId: string): Observable<Cart> {
    return this.http.delete<Cart>(`/cart${productId}`);
  }

  cleanCart(): Observable<any> {
    return this.http.delete('./cart');
  }
}
