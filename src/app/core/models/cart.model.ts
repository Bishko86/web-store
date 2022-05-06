import firebase from 'firebase/compat';

export interface Cart {
  products: string[] | firebase.firestore.FieldValue;
}
