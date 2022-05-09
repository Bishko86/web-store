import firebase from 'firebase/compat';
import { UserRole } from '../enums/user-role.enum';
import { Order } from './order.model';

export interface IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole | undefined;
  createdAt: number;
  orderHistory?: Order[];
}

export class User implements IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole | undefined;
  createdAt: number;
  orderHistory: Order[] | undefined;

  constructor(dto: firebase.User | null, role?: UserRole) {
    this.id = dto?.uid || '';
    this.name = dto?.displayName || '';
    this.email = dto?.email || '';
    this.role = role;
    this.createdAt = Date.parse(dto?.metadata.creationTime || '');
  }
}
