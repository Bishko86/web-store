import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MaterialModule } from './material/material.module';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { DragDropFileUploadDirective } from '../core/directives/drag-drop-file-upload.directive';
import { ProgressComponent } from './components/progress/progress.component';
import { FileFormatPipe } from './pipes/file-format.pipe';
import { MoreOptionsComponent } from './components/more-option/more-options.component';



const SHARED_COMPONENNTS = [
  SpinnerComponent,
  ConfirmComponent,
  DragDropFileUploadDirective,
  ProgressComponent,
  FileFormatPipe,
  MoreOptionsComponent
]

@NgModule({
  declarations: [
    ...SHARED_COMPONENNTS,
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
