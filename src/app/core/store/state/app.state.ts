import { Category, Product, User, UserRole } from '../schemas/app.schema';
export interface IAppState {
  user: User;
  // product: Product;
  // category: Category;
  // isFetching: boolean;
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
  // product: {
  //   id: '', // firebase
  //   name: '',
  //   description: '',
  //   price: 0,
  //   photo: '',
  //   categoryId: '', // firebase
  //   createdAt: 0,
  // },
  // category: {
  //   id: '', // firebase
  //   name: '',
  //   createdAt: 0,
  // },
  // isFetching: false,
};
