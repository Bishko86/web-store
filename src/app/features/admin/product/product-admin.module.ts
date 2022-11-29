import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductAdminComponent } from './product-admin.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { GetCategoryNamePipe } from './pipes/get-category-name.pipe';
import { UploadImageCardComponent } from './components/upload-image-card/upload-image-card.component';

@NgModule({
  declarations: [
    ProductAdminComponent,
    AddProductFormComponent,
    GetCategoryNamePipe,
    UploadImageCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild([{path: '', component: ProductAdminComponent}])
  ],
})
export class ProductAdminModule { }
