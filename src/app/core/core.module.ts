import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppInterceptor } from './interceptors/app.interceptor';
import { NgRxModule } from './store/ngrx.module';
import { FirebaseModule } from './firebase/firebase.module';
import { CategoryService } from '../features/admin/services/category.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    NgRxModule,
    FirebaseModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true},
    CategoryService
  ]
})
export class CoreModule { }
