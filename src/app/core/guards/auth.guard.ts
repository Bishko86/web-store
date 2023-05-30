import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

import { selectUser } from '../store/selectors/auth.selector';
import { AppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>,
  ) { }

  public canActivate(): Observable<boolean | UrlTree> {
    return this.store.select(selectUser).pipe(map((authenticate) => {
      if (!authenticate) {
        return this.router.createUrlTree(['/auth']);
      }
      return true;
    }));
  }
}
