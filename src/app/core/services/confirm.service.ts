import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, Observable } from 'rxjs';
import { ConfirmComponent } from 'src/app/shared/components/confirm/confirm.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  public readonly isAllowed: Subject<boolean> = new Subject();

  constructor(private readonly dialog: MatDialog) {}

  public confirm(message: string): Observable<boolean> {
    this.dialog
      .open(ConfirmComponent, {
        data: message,
      })
      .afterClosed()
      .subscribe((confirm: boolean) => {
        if (confirm) {
          this.isAllowed.next(true);
        } else {
          this.isAllowed.next(false);
        }
      });
    return this.isAllowed;
  }
}
