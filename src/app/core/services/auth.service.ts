import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat';

import { User } from '../models';
import { IAuthCredentials } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(new User(user)));
      } else {
        localStorage.setItem('user', 'null');
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
