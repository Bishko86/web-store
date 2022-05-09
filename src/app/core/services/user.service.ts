import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Cart, IUser } from '../models';
import { SnackBarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersRef: AngularFirestoreCollection<IUser>;
  cartRef: AngularFirestoreCollection<Cart>;

  constructor(
    private firestore: AngularFirestore,
    private snackBar: SnackBarService,
    ) {
    this.usersRef = this.firestore.collection('/users');
    this.cartRef = this.firestore.collection('/cart');
  }

  getAllUsers(): AngularFirestoreCollection<IUser> {
    return this.usersRef;
  }

  async createUser(user: IUser): Promise<void> {
    try {
      await this.cartRef.doc(user.id).set({ products: []});
      await this.usersRef.doc(user.id).set({ ...user });
    } catch (err: any) {
      this.snackBar.openSnackBar('Something went wrong', 'Error');
    }
  }

  updateUser(id: string, data: any): Promise<void> {
    return this.usersRef.doc(id).update(data);
  }

  deleteUser(id: string): Promise<void> {
    return this.usersRef.doc(id).delete();
  }
}
