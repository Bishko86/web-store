import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-category-admin-item',
  templateUrl: './category-admin-item.component.html',
  styleUrls: ['./category-admin-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryAdminItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
