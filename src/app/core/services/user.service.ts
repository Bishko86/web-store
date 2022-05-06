import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { IUser } from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersRef: AngularFirestoreCollection<IUser>;

  constructor(private firestore: AngularFirestore) { 
    this.usersRef = this.firestore.collection('/users');
  }

  getAll(): AngularFirestoreCollection<IUser> {
    return this.usersRef;
  }

  create(user: IUser): Promise<DocumentReference<IUser>> {
    return this.usersRef.add({...user})
  }

  update(id: string, data: any): Promise<void> {
    return this.usersRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.usersRef.doc(id).delete();
  }
}
