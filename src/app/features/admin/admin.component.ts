import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { getCategories } from "src/app/core/store/actions/category.actions";
import { getProducts } from "src/app/core/store/actions/product.action";
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
    this.store.dispatch(getCategories());
    this.store.dispatch(getProducts());
    this.setCurrentTabIndex();
  }

  private setCurrentTabIndex(): void {
    const route = this.router.url.split('/').pop() || 'users';
    this.currentTabIndex = this.tabs.indexOf(route, 0);
  }

  public redirectTo(tab: MatTabChangeEvent): void{
    const url = [this.tabs[tab.index]];
    this.router.navigate(url, {relativeTo: this.route});
  }
}
