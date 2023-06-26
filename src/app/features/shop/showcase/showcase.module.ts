import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShowcaseComponent } from './showcase.component';
import { FilterComponent } from './components/filter/filter.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      { path: 'category/:name', component: CategoryComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ShowcaseComponent,
    FilterComponent,
    CategoryListComponent,
    CategoryComponent,
    ProductCardComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), MaterialModule],
})
export class ShowcaseModule { }
