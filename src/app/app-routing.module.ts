import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./static/layout/layout.module').then((mod) => mod.LayoutModule),
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./static/auth/auth.module').then((mod) => mod.AuthModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
