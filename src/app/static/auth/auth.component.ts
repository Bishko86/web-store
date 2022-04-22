import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  isAuthPage = true;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

 ngOnInit(): void {
    this.routeListener();
  }

  private routeListener(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationStart))
      .subscribe((event) => {
        this.isAuthPage = event.url === '/auth';
        this.cdr.markForCheck();
      });
    this.isAuthPage = this.router.url === '/auth';
  }

  signIn(): void {
    this.router.navigate(['auth/sign-in']);
  }

  signUp(): void {
    this.router.navigate(['auth/sign-up']);
  }
}
