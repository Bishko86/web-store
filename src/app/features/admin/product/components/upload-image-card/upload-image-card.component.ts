import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { UploadFile } from '../../models/upload-file.model';

@Component({
  selector: 'app-upload-image-card',
  templateUrl: './upload-image-card.component.html',
  styleUrls: ['./upload-image-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadImageCardComponent {
  @Input() public file: UploadFile;

  @Output() private deleteProduct: EventEmitter<string> = new EventEmitter();
  @Output() private cancelUpload: EventEmitter<UploadFile> = new EventEmitter();

  public onDeleteProductPhoto(productName: string): void {
    this.deleteProduct.emit(productName)
  }

  public cancelUploadImage(file: UploadFile): void {
    this.cancelUpload.emit(file);
  }
}
