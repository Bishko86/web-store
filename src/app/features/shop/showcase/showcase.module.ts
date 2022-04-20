import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { CategoryComponent } from './components/category/category.component';

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
  declarations: [ShowcaseComponent, FilterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ShowcaseModule {}
