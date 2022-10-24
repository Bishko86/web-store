import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { finalize, Observable, Subject } from 'rxjs';
import { ProductImage } from 'src/app/features/admin/product/models/product-image.model';

@Injectable({ providedIn: 'root' })
export class UploadFileService {
  private basePath = '/uploads';

  public uploadedFiles$: Subject<ProductImage> = new Subject<ProductImage>();

  constructor(private readonly storage: AngularFireStorage) {}

  public pushFileToStorage(file: File): AngularFireUploadTask {
    const filePath = `${this.basePath}/${file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);
    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadUrl) => {
            const fileUploaded = { url: downloadUrl, name: file.name, size: file.size };
            this.uploadedFiles$.next(fileUploaded);
          });
        })
      )
      .subscribe();
    return uploadTask;
  }

  public deleteFile(fileName: string): Observable<void> {
    const storageRef = this.storage.ref(this.basePath);
    return storageRef.child(fileName).delete();
  }
}
