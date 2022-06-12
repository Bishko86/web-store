import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';
import { FileUpload } from 'src/app/core/models/image.model';
interface DbFileModel {
  name: string;
  url: string;
}

@Injectable()
export class UploadFileService {
  private fileRef: AngularFirestoreCollection<DbFileModel>;
  private basePath = '/uploads';

  constructor(
    private firestore: AngularFirestore,
    private storage: AngularFireStorage,
    ) {
    this.fileRef = this.firestore.collection('/photos');
  }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadUrl => {
          fileUpload.url = downloadUrl;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload);
        })
      })
    );
    return uploadTask.percentageChanges();
  }

  private saveFileData(fileUpload: FileUpload): void {
    const {name, url} = fileUpload;
    this.fileRef.add({name, url});
  }

  getFiles(): AngularFirestoreCollection<DbFileModel> {
    return this.fileRef;
  }

  addPhoto(productId: string, fileData: DbFileModel): void {
    this.fileRef.doc(productId)
    //.update({ photos: firebase.firestore.FieldValue.arrayUnion(fileData) });
  }
}
