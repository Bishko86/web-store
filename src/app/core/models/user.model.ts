import { UserRole } from '../enums/user-role.enum';
import { Cart } from './cart.model';
import { Order } from './order.model';

export interface IUser {
  id: string;
    name: string;
    email: string;
    role: UserRole | null;
    createdAt: number;
    cart?: Cart;
    orderHistory?: Order[];
}
