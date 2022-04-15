import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminFormComponent } from './product-form/product-admin-form.component';
import { ProductAdminItemComponent } from './product-admin-item/product-admin-item.component';
import { ProductAdminComponent } from './product-admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductAdminFormComponent,
    ProductAdminItemComponent,
    ProductAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ProductAdminComponent}])
  ],
})
export class ProductAdminModule { }
