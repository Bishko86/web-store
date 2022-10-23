import { Observable } from 'rxjs';

export interface UploadFile {
  url: string | null;
  name: string;
  size: number;
  progress$?: Observable<number | undefined>;
  cancel?: () => {};
}
