import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ShowcaseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ShowcaseComponent}])
  ],
})
export class ShowcaseModule { }
