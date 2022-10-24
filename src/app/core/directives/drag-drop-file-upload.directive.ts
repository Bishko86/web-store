import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appDragDropFileUpload]',
})
export class DragDropFileUploadDirective {
  @Output() private readonly fileDropped = new EventEmitter<FileList>();

  @HostBinding('style.background-color') private backgroundColor = '#ffffff';

  @HostListener('dragover', ['$event']) private dragOver(
    event: DragEvent
  ): void {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = '#fcfcfc';
  }

  @HostListener('dragleave', ['$event']) private dragLeave(
    event: DragEvent
  ): void {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = '#ffffff';
  }

  @HostListener('drop', ['$event']) private drop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.backgroundColor = '#cccccc';

    const files = event?.dataTransfer?.files as FileList;
    if (files?.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
