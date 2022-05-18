import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryAdminFormComponent } from './components/category-admin-form/category-admin-form.component';
import { CategoryAdminComponent } from './category-admin-component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';





@NgModule({
  declarations: [
    CategoryAdminComponent,
    CategoryAdminFormComponent,
    UpdateCategoryComponent,
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
