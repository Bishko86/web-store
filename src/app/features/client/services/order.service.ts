import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStatus } from 'src/app/core/enums/order-status.enum';
import { Product } from 'src/app/core/models';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  createOrder(orderList: Product[]): Observable<any> {
    return this.http.post('./orders', {orderList});
  }

  cancelOrder(orderId: string): Observable<any> {
    return this.http.put('./orders', {orderId, status: OrderStatus.CANCELED});
  }
}
