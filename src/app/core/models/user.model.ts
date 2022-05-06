import firebase from 'firebase/compat';
import { UserRole } from '../enums/user-role.enum';
import { Cart } from './cart.model';
import { Order } from './order.model';

export interface IUser {
  id: string | undefined;
  name: string;
  email: string;
  role: UserRole | null;
  createdAt: number;
  cart?: Cart;
  orderHistory?: Order[];
}

export class User implements IUser {
  id: string | undefined;
  name: string;
  email: string;
  role: UserRole;
  createdAt: number;
  cart: Cart | undefined;
  orderHistory: Order[] | undefined;

  constructor(dto: firebase.User | null) {
    this.id = dto?.uid;
    this.name = dto?.displayName || '';
    this.email = dto?.email || '';
    this.role = UserRole.CLIENT;
    this.createdAt = Date.parse(dto?.metadata.creationTime || '');
  }
}
