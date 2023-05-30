import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Store } from '@ngrx/store';

import firebase from 'firebase/compat';
import { filter, OperatorFunction, Subscription, throttleTime } from 'rxjs';

import { User } from '../models';
import { IAuthCredentials } from '../models/auth.model';
import { updateUser } from '../store/actions/auth.actions';
import { AppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subscription$ = new Subscription();
  constructor(
    private readonly afAuth: AngularFireAuth,
    private readonly firestore: AngularFirestore,
    private readonly store: Store<AppState>,
  ) {
    this.afAuth.authState.pipe(throttleTime(50)).subscribe((user) => {
      if (user) {
        this.saveUser(user);
      } else {
        this.subscription$.unsubscribe();
        localStorage.removeItem('user');
      }
    });
  }

  private saveUser(userModel: firebase.User): void {
    this.subscription$ = this.firestore.collection('/users').doc(userModel.uid).valueChanges()
      .pipe(filter((user: User) => user?.role !== undefined) as OperatorFunction<User | unknown, User>)
      .subscribe((data: User) => {
        const user = new User(userModel, data.role)
        this.store.dispatch(updateUser({ user }));
        localStorage.setItem('user', JSON.stringify(user));
      });
  }

  public login({ email, password }: IAuthCredentials): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public async registrate({ email, password, username }: IAuthCredentials): Promise<firebase.User | null> {
    await this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((d) => d.user?.updateProfile({ displayName: username }));

    const user = await this.afAuth.currentUser;
    return user;
  }

  public logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
