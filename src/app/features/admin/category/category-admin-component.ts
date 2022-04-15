import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin-component.html',
  styleUrls: ['./category-admin-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryAdminComponent {}