import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Category } from 'src/app/core/models';

@Injectable()
export class CategoryService {
  private categoryRef: AngularFirestoreCollection<Category>;

  constructor(private readonly firestore: AngularFirestore) {
    this.categoryRef = this.firestore.collection('/categories');
  }

  public getCategories(): AngularFirestoreCollection<Category> {
    return this.categoryRef;
  }

  public async addCategory(name: string): Promise<Category> {
    const res = await this.categoryRef.add({ name: name, createdAt: Date.now() });
    console.error(res, 'gg');

    return new Promise((resolve, reject) => {
      res.onSnapshot((cat) => {
        if (cat.exists) {
          resolve({ ...cat.data(), id: cat.id } as Category);
        } else { reject('Somethig went wrong') }
      })
    });
  }

  public removeCategory(categoryId: string): Promise<void> {
    return this.categoryRef.doc(categoryId).delete();
  }

  public updateCategory(categoryName: string, categoryId: string): Promise<void> {
    return this.categoryRef.doc(categoryId).update({ name: categoryName })
  }
}
