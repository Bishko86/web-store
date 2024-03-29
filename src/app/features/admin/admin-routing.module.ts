import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '', redirectTo: 'users',
        pathMatch: 'full'
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then((mod) => mod.UsersModule),
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./order/orders-admin.module').then((mod) => mod.OrdersAdminModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./product/product-admin.module').then((mod) => mod.ProductAdminModule),
      },
      {
        path: 'categories', loadChildren: () => import('./category/category-admin.module').then((mod) => mod.CategoryAdminModule),
      },
      { path: '**', redirectTo: '/admin/users' },
    ],
  },

];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
