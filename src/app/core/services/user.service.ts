import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Cart, IUser } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersRef: AngularFirestoreCollection<IUser>;
  cartRef: AngularFirestoreCollection<Cart>;

  constructor(private firestore: AngularFirestore) {
    this.usersRef = this.firestore.collection('/users');
    this.cartRef = this.firestore.collection('/cart');
  }

  getAll(): AngularFirestoreCollection<IUser> {
    return this.usersRef;
  }

  async createUser(user: IUser): Promise<DocumentReference<IUser>> {
    try {
      const userCart = await this.cartRef.add({ products: [], clientId: ''});
      const userDocument = await this.usersRef.add({ ...user, cart: userCart.id });
      await this.cartRef.doc(userCart.id).update({ clientId: userDocument.id });
      return userDocument;
    } catch (err: any) {
      return err;
    }
  }

  updateUser(id: string, data: any): Promise<void> {
    return this.usersRef.doc(id).update(data);
  }

  deleteUser(id: string): Promise<void> {
    return this.usersRef.doc(id).delete();
  }
}
