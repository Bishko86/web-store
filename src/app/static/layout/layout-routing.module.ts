import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { UserGuard } from 'src/app/core/guards/user.guard';
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
        canActivate: [AuthGuard, AdminGuard],
      },
      {
        path: 'client',
        loadChildren: () => import('../../features/client/client.module').then((mod) => mod.ClientModule),
        canActivate: [AuthGuard, UserGuard],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
