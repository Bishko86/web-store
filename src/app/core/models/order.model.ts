import { OrderStatus } from "../enums/order-status.enum";

export interface Order {
  id: string;
  orderNumber: number;
  clientId: string;
  products: string[];
  total: number;
  status: OrderStatus;
  createdAt: number;
}
