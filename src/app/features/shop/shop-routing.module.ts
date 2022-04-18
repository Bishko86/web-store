import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    children: [
      { path: '', loadChildren: () => import('./showcase/showcase.module').then((mod)=> mod.ShowcaseModule)},
      { path: 'category/:name', loadChildren: () => import('./category/category.module').then((mod) => mod.CategoryModule) },
      { path: 'product/:name', loadChildren: () => import('./product/product.module').then((mod)=> mod.ProductModule) },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule {}
