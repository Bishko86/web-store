import { UserRole } from '../../enums/user-role.enum';
import { Category, Product, User } from '../../models';

export interface IAppState {
  user: User;
  product?: Product;
  category?: Category;
  isFetching?: boolean;
}

export const initialState: IAppState = {
  user: {
    id: '',
    name: '',
    email: '',
    role: UserRole.ADMIN,
    createdAt: 0,
    isLoggedIn: false,
  },
  product: {
    id: '',
    name: '',
    description: '',
    price: 0,
    photo: '',
    categoryId: '',
    createdAt: 0,
  },
  category: {
    id: '',
    name: '',
    createdAt: 0,
  },
  isFetching: false,
};
