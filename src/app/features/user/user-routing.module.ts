import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'cart', component: CartComponent },
      { path: 'orders', component: OrdersComponent },
      { path: '**', redirectTo: ''}
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
