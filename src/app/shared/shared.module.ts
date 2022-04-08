import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Spinner2Component } from './components/spinner2/spinner2.component';



@NgModule({
  declarations: [
    SpinnerComponent,
    Spinner2Component
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
