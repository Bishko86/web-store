import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';

import { Product } from 'src/app/core/models';

@Injectable()
export class ProductService {
  productRef: AngularFirestoreCollection<Product>;
  constructor(private readonly firestore: AngularFirestore) {
    this.productRef = this.firestore.collection('/products');
  }

  public getProducts(): AngularFirestoreCollection<Product> {
    return this.productRef;
  }

  public async addProduct(product: Product): Promise<Product> {
    const res = await this.productRef.add({ ...product, createdAt: Date.now() });
    return new Promise((resolve, reject) => {
      res.onSnapshot((prod) => {
        if (prod.exists) {
          resolve({ id: prod.id, ...prod.data() } as Product);
        } else {
          reject('Somethig went wrong');
        }
      })
    });
  }

  public updateProduct(product: Product): Promise<void> {
    return this.productRef.doc(product.id).update(product);
  }

  public removeProduct(productId: string): Promise<void> {
    return this.productRef.doc(productId).delete();
  }

  public getProductsByCategory(categoryId: string): Observable<Product[]> {
    return from(this.productRef.ref.where('categoryId', '==', categoryId).get().then((data) => {
      return data.docChanges().map((data) => ({ id: data.doc.id, ...data.doc.data() }))
    }));
  }
}
