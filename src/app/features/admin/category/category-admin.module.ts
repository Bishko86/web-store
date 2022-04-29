import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAdminFormComponent } from './category-admin-form/category-admin-form.component';
import { CategoryAdminItemComponent } from './category-admin-item/category-admin-item.component';
import { CategoryAdminComponent } from './category-admin-component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    CategoryAdminComponent,
    CategoryAdminFormComponent,
    CategoryAdminItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: CategoryAdminComponent}])
  ]
})
export class CategoryAdminModule { }
