import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { UserRole } from "../enums/user-role.enum";
import { MaterialService } from "../services/material.service";

@Injectable({
  providedIn: 'root',
})

export class AdminGuard implements CanActivate {
  private role = UserRole.ADMIN;
  private url: string;
  constructor(private router: Router, private matServise: MaterialService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.url = route.routeConfig?.path || '';
    if(this.url === 'admin' && this.role === 0){
      return true
    } else {
      this.router.navigate(['']);
      this.matServise.openSnackBar(
        'Your role is "ADMIN". You don`t have access to this route!',
        'Forbidden'
      );
      return false;
    }
  }
}