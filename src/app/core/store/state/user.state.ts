import { Cart } from "../../models";

export interface UserState {
    cart: Cart | null;
  }
  
  export const initialUserState: UserState = {
    cart: null,
  }
  