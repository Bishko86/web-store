import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAdminFormComponent } from './category-admin-form/category-admin-form.component';
import { CategoryAdminItemComponent } from './category-admin-item/category-admin-item.component';
import { CategoryAdminComponent } from './category-admin-component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    CategoryAdminComponent,
    CategoryAdminFormComponent,
    CategoryAdminItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: CategoryAdminComponent}])
  ]
})
export class CategoryAdminModule { }
