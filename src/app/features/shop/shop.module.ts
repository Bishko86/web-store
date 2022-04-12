import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { FilterComponent } from './components/filter/filter.component';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ShopComponent,
    ProductComponent,
    CategoryComponent,
    FilterComponent,
  ],
  imports: [CommonModule, ShopRoutingModule],
  exports: [ShopRoutingModule],
})
export class ShopModule {}
