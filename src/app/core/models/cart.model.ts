import firebase from 'firebase/compat';
import { Product } from './product.model';

export interface Cart {
  clientId?: string;
  products: Product[] | string[] | firebase.firestore.FieldValue;
}
