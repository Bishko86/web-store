import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { UserRoutingModule } from './client-routing.module';
import { OrderService } from './services/order.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [ClientComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [OrderService, CartService]
})
export class ClientModule {}
