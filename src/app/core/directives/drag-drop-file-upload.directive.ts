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
  @HostBinding('style.border') private border = 'dashed';

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
    this.border = 'solid';

    const files = event?.dataTransfer?.files as FileList;
    if (files?.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
