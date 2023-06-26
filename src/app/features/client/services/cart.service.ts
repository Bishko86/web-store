import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

import { Cart, Product } from 'src/app/core/models';
import { selectUserId } from 'src/app/core/store/selectors/auth.selector';
import { AppState } from 'src/app/core/store/state/app.state';
import { Observable, combineLatest, map, tap } from 'rxjs';

@Injectable()
export class CartService {
  private cartRef: AngularFirestoreCollection<Cart>;
  private cartId: string | undefined;
  private productRef: AngularFirestoreCollection<Product[]>;

  constructor(
    private firestore: AngularFirestore,
    private store: Store<AppState>
  ) {
    this.getCartRef();
    this.getCartId();
    this.getProductRef();
  }

  private getCartRef(): void {
    this.cartRef = this.firestore.collection('/cart');
  }

  private getProductRef(): void {
    this.productRef = this.firestore.collection('/products');
  }

  private getCartId(): void {
    this.store.select(selectUserId).subscribe((id) => (this.cartId = id));
  }

  public getCart(): Observable<Cart | undefined> {
    return this.cartRef.doc(this.cartId).valueChanges();
  }

  public addToCart(productId: string): Promise<void> {
    return this.cartRef.doc(this.cartId)
      .update({ products: firebase.firestore.FieldValue.arrayUnion(productId) });
  }

  public removeFromCart(productId: string): Promise<void> {
    return this.cartRef.doc(this.cartId)
      .update({ products: firebase.firestore.FieldValue.arrayRemove(productId) });
  }

  //TODO to avoid useless request
  public getCartProducts(productIds: string[]): Observable<Product[]> {
    const productObservables = productIds.map(productId => {
      const productDoc = this.firestore.collection('products').doc(productId);
      return productDoc.get().pipe(map(snapshot => ({ id: snapshot.id, ...snapshot.data() as Product })));
    });

    return combineLatest(productObservables);
  }
}
