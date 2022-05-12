import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Category } from 'src/app/core/models';

@Injectable()
export class CategoryService {
  categoryRef: AngularFirestoreCollection<Category>;
  constructor(private firestore: AngularFirestore) { 
      this.categoryRef = this.firestore.collection('/categories');
    }

  getCategories(): AngularFirestoreCollection<Category> {
    return this.categoryRef;
  }

  addCategory(name: string): Promise<DocumentReference<Category>> {
    return this.categoryRef.add({name, createdAt: Date.now()});
  }

  removeCategory(categoryId: string): Promise<void> {
    return this.categoryRef.doc(categoryId).delete();
  }
}
