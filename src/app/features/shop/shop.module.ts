import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ShopRoutingModule } from './shop-routing.module';
import { FilterModule } from './filter/filter.module';

@NgModule({
  declarations: [
    ShopComponent,
  ],
  imports: [CommonModule, ShopRoutingModule, FilterModule],
})
export class ShopModule {}
