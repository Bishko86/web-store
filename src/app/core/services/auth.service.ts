import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Store } from '@ngrx/store';
import firebase from 'firebase/compat';

import { IUser, User } from '../models';
import { IAuthCredentials } from '../models/auth.model';
import { loginSuccess, logoutSuccess } from '../store/actions/user.actions';
import { selectUser } from '../store/selectors/user.selector';
import { IAppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userIsLog: IUser | null;

  constructor(
    private afAuth: AngularFireAuth,
    private store: Store<IAppState>
  ) {
    this.store.select(selectUser).subscribe((user) => (this.userIsLog = user));

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        if (!this.userIsLog) {
          this.store.dispatch(loginSuccess({ user: new User(user) }));
        }
      } else {
        localStorage.setItem('user', 'null');
        if (this.userIsLog) {
          this.store.dispatch(logoutSuccess());
        }
      }
    });
  }

  login({ email, password }: IAuthCredentials): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async registrate({email, password, username}: IAuthCredentials): Promise<firebase.User | null> {
    await this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((d) => d.user?.updateProfile({ displayName: username }));

    const user = await this.afAuth.currentUser;
    return user;
  }

  logout(): Promise<void> {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
    });
  }
}
