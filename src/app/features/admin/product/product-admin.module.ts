import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminItemComponent } from './product-admin-item/product-admin-item.component';
import { ProductAdminComponent } from './product-admin.component';
import { RouterModule } from '@angular/router';
import { ProductMoreOptionsComponent } from './components/product-more-options/product-more-options.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';

@NgModule({
  declarations: [
    ProductAdminItemComponent,
    ProductAdminComponent,
    ProductMoreOptionsComponent,
    AddProductFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{path: '', component: ProductAdminComponent}])
  ],
})
export class ProductAdminModule { }
