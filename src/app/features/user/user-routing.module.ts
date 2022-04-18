import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'cart', loadChildren: () => import('./cart/cart.module').then((mod) => mod.CartModule)},
      { path: 'orders', loadChildren: () => import('./orders/orders.module').then((mod) => mod.OrdersModule) },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
