import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/core/store/actions/user.actions';
import { selectUser } from 'src/app/core/store/selectors/user.selector';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  readonly user$ = this.store.select(selectUser);

  constructor(private router: Router, private store: Store<IAppState>) { }

  ngOnInit(): void {
  }

  showCart() {
    this.router.navigate(['user/cart']);
  }

  signOut() {
    this.store.dispatch(logout());
  }
}
