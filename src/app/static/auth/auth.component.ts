import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { DestroyableDirective } from 'src/app/core/directives/destroyable.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent
  extends DestroyableDirective
  implements OnInit, OnDestroy
{
  public isAuthPage = true;

  constructor(private router: Router, private cdr: ChangeDetectorRef) {
    super();
  }

  public ngOnInit(): void {
    this.routeListener();
  }

  private routeListener(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((e): e is NavigationEnd => e instanceof NavigationStart)
      )
      .subscribe((event) => {
        this.isAuthPage = event.url === '/auth';
        this.cdr.markForCheck();
      });
    this.isAuthPage = this.router.url === '/auth';
  }
}
