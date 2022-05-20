import { FirebaseError } from "firebase/app";
import { Product } from "../../models";

export interface IProductState {
  products: Product[];
  error: FirebaseError | null;
  isLoading: boolean;
}

export const initialProductState = {
  products: [],
  error: null,
  isLoading: false,
}
