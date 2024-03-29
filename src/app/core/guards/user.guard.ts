import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { UserRole } from '../enums/user-role.enum';
import { SnackBarService } from '../services/snackbar.service';
import { selectUserRole } from '../store/selectors/auth.selector';
import { AppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  private url: string;

  constructor(
    private readonly router: Router,
    private readonly snackBarServise: SnackBarService,
    private readonly store: Store<AppState>
  ) { }

  public canActivate(route: ActivatedRouteSnapshot): boolean | Observable<boolean> {
    this.url = route.routeConfig?.path || '';
    return this.store.select(selectUserRole).pipe(
      map((role) => {
        if (this.url === 'client' && role === 1) {
          return true;
        } else {
          this.router.navigate(['']);
          this.snackBarServise.openSnackBar(
            `Your role is "${UserRole[0]}". You don't have access to this route!`,
            'Forbidden'
          );
          return false;
        }
      })
    );
  }
}
