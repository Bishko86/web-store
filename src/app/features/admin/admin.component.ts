import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatTabChangeEvent } from "@angular/material/tabs";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AdminComponent {
  public tabs = ['users', 'orders', 'categories', 'products']

  constructor(private router: Router, private route: ActivatedRoute) {}

  public redirectTo(tab: MatTabChangeEvent): void{
    this.router.navigate([this.tabs[tab.index]], {relativeTo: this.route});
  }
}
