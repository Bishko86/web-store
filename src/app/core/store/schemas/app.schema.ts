import { OrderStatus } from "../../enums/order-status.enum";
import { UserRole } from "../../enums/user-role.enum";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: number;
  isLoggedIn: boolean;
  cart?: Cart;
  orderHistory?: Order[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  photo?: string;
  categoryId: string;
  createdAt: number;
}

export interface Category {
  id: string;
  name: string;
  createdAt: number;
}

export interface Cart {
  id: string;
  clientId: string;
  products: string[];
}

export interface Order {
  id: string;
  orderNumber: number;
  clientId: string;
  products: string[];
  total: number;
  status: OrderStatus;
  createdAt: number;
}

export interface SupportChat {
  id: string;
  clientId: string;
  messages: SupportMessage[];
  createdAt: number;
}

export interface SupportMessage {
  userId: string;
  text: string;
  createdAt: number;
}
