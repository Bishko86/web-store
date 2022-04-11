import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserRole } from '../enums/user-role.enum';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  private url: string;
  private role: string;
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):| Observable<boolean |  UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.role = UserRole.ADMIN;
    this.url = route.routeConfig?.path || '';

    if (this.url === UserRole.ADMIN && this.role === UserRole.ADMIN) {
      return true;
    } else if ((this.url === 'orders' || this.url === 'cart') && this.role === UserRole.CLIENT) {
      return true;
    } else {
      this.router.navigate(['']);
      this.openSnackBar(
        `Your role is ${this.role}. 
      You dont have access to ${this.url} route!`,
        'Forbidden'
      );
      return false;
    }
  }

  openSnackBar(text: string, action: string) {
    this.snackBar.open(text, action, {
      duration: 2500,
      verticalPosition: 'top',
      panelClass: ['color-snackbar'],
    });
  }
}
