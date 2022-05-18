import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryFormComponent } from './components/add-category-form/add-category-form.component';
import { CategoryAdminComponent } from './category-admin-component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './components/update-category/update-category.component';
import { MoreOptionsComponent } from './components/more-options/more-options.component';





@NgModule({
  declarations: [
    CategoryAdminComponent,
    AddCategoryFormComponent,
    UpdateCategoryComponent,
    MoreOptionsComponent,
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
