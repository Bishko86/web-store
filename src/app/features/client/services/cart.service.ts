import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

import { Cart } from 'src/app/core/models';
import { selectUserId } from 'src/app/core/store/selectors/auth.selector';
import { IAppState } from 'src/app/core/store/state/app.state';
import { Observable } from 'rxjs';

@Injectable()
export class CartService {
  cartRef: AngularFirestoreCollection<Cart>;
  cartId: string | undefined;

  constructor(
    private firestore: AngularFirestore,
    private store: Store<IAppState>
  ) {
    this.getCartRef();
    this.getCartId();
  }

  private getCartRef(): void {
    this.cartRef = this.firestore.collection('/cart');
  }

  private getCartId(): void {
    this.store.select(selectUserId).subscribe((id) => (this.cartId = id));
  }

  getCart(): Observable<Cart | undefined> {
    return this.cartRef.doc(this.cartId).valueChanges();
  }

  addToCart(productId: string): void {
    this.cartRef.doc(this.cartId)
    .update({ products: firebase.firestore.FieldValue.arrayUnion(productId) });
  }

  removeFromCart(productId: string): void {
    this.cartRef.doc(this.cartId)
      .update({ products: firebase.firestore.FieldValue.arrayRemove(productId) });
  }
}
