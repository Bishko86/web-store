import { UserRole } from "../enums/user-role.enum";
import { Cart } from "./cart.model";
import { Order } from "./order.model";

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
