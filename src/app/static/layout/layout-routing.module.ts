import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { CartComponent } from 'src/app/features/user/components/cart/cart.component';
import { OrdersComponent } from 'src/app/features/user/components/orders/orders.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', loadChildren: () => import('../../features/shop/shop.module').then((mod) => mod.ShopModule)
      },
      {
        path: 'admin', loadChildren: () => import('../../features/admin/admin.module').then((mod) => mod.AdminModule),
        canActivate: [AuthGuard, RoleGuard],
      },
      {
        path: 'user',
        loadChildren: () => import('../../features/user/user.module').then((mod) => mod.UserModule),
        canActivate: [AuthGuard, RoleGuard],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
