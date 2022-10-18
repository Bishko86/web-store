import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UploadFileService {
  private basePath = '/uploads';
  public uploadedFiles$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private readonly storage: AngularFireStorage) {}

  public pushFileToStorage(file: File): Observable<number | undefined> {
    const filePath = `${this.basePath}/${file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);
    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadUrl) => {
            const uploadedFiles = this.uploadedFiles$.getValue();
            const fileUploaded = { url: downloadUrl, name: file.name };
            this.uploadedFiles$.next([...uploadedFiles, fileUploaded]);
          });
        })
      )
      .subscribe();
    return uploadTask.percentageChanges();
  }

  public deleteFile(fileName: string): Observable<void> {
    return this.deleteFileStorage(fileName);
  }

  private deleteFileStorage(fileName: string): Observable<void> {
    const storageRef = this.storage.ref(this.basePath);
    return storageRef.child(fileName).delete();
  }
}
