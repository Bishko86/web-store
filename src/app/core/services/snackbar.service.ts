import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(text: string, action: string, duration: number = 2500) {
    this.snackBar.open(text, action, {
      duration: duration,
      verticalPosition: 'top',
      panelClass: ['color-snackbar'],
    });
  }
}
