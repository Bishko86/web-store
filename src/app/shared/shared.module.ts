import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from './material/material.module';
import { ConfirmComponent } from './components/confirm/confirm.component';

const SHARED_COMPONENNTS = [
  SpinnerComponent,
  ConfirmComponent
]

@NgModule({
  declarations: [
    ...SHARED_COMPONENNTS
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    ...SHARED_COMPONENNTS
  ]
})
export class SharedModule { }
