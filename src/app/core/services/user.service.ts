import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Cart, User } from '../models';
import { SnackBarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersRef: AngularFirestoreCollection<User>;
  cartRef: AngularFirestoreCollection<Cart>;

  constructor(
    private firestore: AngularFirestore,
    private snackBar: SnackBarService,
    ) {
    this.usersRef = this.firestore.collection('/users');
    this.cartRef = this.firestore.collection('/cart');
  }

  public getAllUsers(): AngularFirestoreCollection<User> {
    return this.usersRef;
  }

  public async createUser(user: User): Promise<void> {
    try {
      await this.cartRef.doc(user.id).set({ products: []});
      await this.usersRef.doc(user.id).set({ ...user, role: 1 });
    } catch (err: any) {
      this.snackBar.openSnackBar('Something went wrong', 'Error');
    }
  }

  public updateUser(id: string, data: any): Promise<void> {
    return this.usersRef.doc(id).update(data);
  }

  public deleteUser(id: string): Promise<void> {
    return this.usersRef.doc(id).delete();
  }
}
