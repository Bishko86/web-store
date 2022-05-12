import { FirebaseError } from "firebase/app";
import { Category } from "../../models";

export interface ICategoryState {
  categories: Category[];
  error: FirebaseError;
  isLoading: boolean;
}

export const initialCategoryState = {
  categories: [],
  error: null,
  isLoading: false,
}
