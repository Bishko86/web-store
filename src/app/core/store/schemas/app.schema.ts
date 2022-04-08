export interface User {
  id: string; // firebase
  name: string;
  email: string;
  role: UserRole;
  createdAt: number; // Date.now
  isLoggedIn: boolean;
  cart?: Cart;
  orderHistory?: Order[];
}

export interface Product {
  id: string; // firebase
  name: string;
  description: string;
  price: number;
  photo?: string;
  categoryId: string; // firebase
  createdAt: number; // Date.now
}

export interface Category {
  id: string; // firebase
  name: string;
  createdAt: number; // Date.now
}

export interface Cart {
  id: string; // firebase
  clientId: string;
  products: string[]; // product ids
}

export interface Order {
  id: string; // firebase
  orderNumber: number;
  clientId: string; // firebase
  products: string[]; // product ids
  total: number;
  status: OrderStatus;
  createdAt: number; // Date.now
}

export interface SupportChat {
  id: string; // firebase
  clientId: string;
  messages: SupportMessage[];
  createdAt: number; // Date.now
}

export interface SupportMessage {
  userId: string;
  text: string;
  createdAt: number; // Date.now
}

export  enum OrderStatus {
  NEW,
  IN_PROGRESS,
  DONE,
  CANCELED
}

export enum UserRole {
  ADMIN,
  CLIENT
}