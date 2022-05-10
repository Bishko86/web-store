import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { getUsers } from "src/app/core/store/actions/users.actions";
import { IAppState } from "src/app/core/store/state/app.state";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AdminComponent implements OnInit {
  public tabs = ['users', 'orders', 'categories', 'products']
  public currentTabIndex: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    ) {}

  ngOnInit(): void {
    this.store.dispatch(getUsers());
    this.setCurrentTabIndex();
  }

  private setCurrentTabIndex(): void {
    const route = this.router.url.split('/').pop() || 'users';
    this.currentTabIndex = this.tabs.indexOf(route, 0);
  }

  public redirectTo(tab: MatTabChangeEvent): void{
    this.router.navigate([this.tabs[tab.index]], {relativeTo: this.route});
  }
}
