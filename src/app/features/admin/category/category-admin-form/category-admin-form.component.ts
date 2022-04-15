import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-category-admin-form',
  templateUrl: './category-admin-form.component.html',
  styleUrls: ['./category-admin-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryAdminFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
