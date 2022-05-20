import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models';

@Injectable()
export class ProductService {
  productRef: AngularFirestoreCollection<Product>;
  constructor(private http: HttpClient, private firestore: AngularFirestore) {
    this.productRef = this.firestore.collection('/products')
   }

  getProducts(): AngularFirestoreCollection<Product> {
    return this.productRef;
  }

  async addProduct(product: Product): Promise<Product> {
    const res = await this.productRef.add({...product, createdAt: Date.now()})

    return  new Promise((resolve, reject) => {
      res.onSnapshot((prod) => {
        if(prod.exists) {
          resolve({ ...prod.data(), id: prod.id } as Product );
        }else {reject ('Somethig went wrong')}
      })
    });
  }

  updateProduct(product: Product): Promise<void> {
    return this.productRef.doc(product.id).update(product);
  }

  removeProduct(productId: string): Promise<void> {
    return this.productRef.doc(productId).delete();
  }
}
