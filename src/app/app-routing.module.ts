import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./static/layout/layout.module').then((mod) => mod.LayoutModule),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('./static/auth/auth.module').then((mod) => mod.AuthModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes, { useHash: !isDevMode() })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
