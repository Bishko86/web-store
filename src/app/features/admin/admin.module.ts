import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { AdminComponent } from './admin.component';
import { OrderService } from './services/order.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  providers: [CategoryService, OrderService, ProductService,]
})
export class AdminModule { }
