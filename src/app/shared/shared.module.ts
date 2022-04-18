import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from './material/material.module';
import { ConfirmComponent } from './components/confirm/confirm.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    SpinnerComponent,
    ConfirmComponent,
  ]
})
export class SharedModule { }
