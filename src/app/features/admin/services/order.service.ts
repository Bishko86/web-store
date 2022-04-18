import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderStatus } from 'src/app/core/enums/order-status.enum';
import { Order } from 'src/app/core/models';


@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('/orders');
  }

  changeOrderStatus(orderId: string, status: OrderStatus): Observable<any> {
    return this.http.put('/orders', {orderId, status});
  }
}
