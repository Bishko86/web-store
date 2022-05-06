import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectUser } from '../store/selectors/user.selector';
import { IAppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<IAppState>){}

  canActivate(): Observable<boolean | UrlTree>{
      return this.store.select(selectUser).pipe(map((authenticate) => {
        if(!authenticate) {
          return this.router.createUrlTree(['/auth']);
        }
        return true;
      }));
  }
}
