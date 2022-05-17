import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
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

  async addCategory(name: string): Promise<Category | undefined> {
    const res = await this.categoryRef.add({name: name, createdAt: Date.now()});
    
    return  new Promise((resolve, reject) => {
      res.onSnapshot((cat) => {
        if(cat.exists) {
          resolve({ ...cat.data(), id:cat.id } as Category );
        }else {reject ('Somethig went wrong')}
      })
    });
  }

  removeCategory(categoryId: string): Promise<void> {
    return this.categoryRef.doc(categoryId).delete();
  }
}
