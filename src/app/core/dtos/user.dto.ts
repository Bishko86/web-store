import { UserRole } from "../enums/user-role.enum";
import { Cart, IUser, Order } from "../models";

export class UserDto implements IUser {
  id: string;
  name: string;
  email: string;
  role: UserRole | null;
  createdAt: number;
  cart: Cart | undefined;
  orderHistory: Order[] | undefined;

  constructor(dto: any) {
    this.id = dto.uid;
    this.name = dto.auth.currentUser.displayName;
    this.email = dto.email;
    this.role = UserRole.CLIENT;
    this.createdAt = dto.metadata.createdAt;
  }
}