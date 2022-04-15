import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(text: string, action: string) {
    this.snackBar.open(text, action, {
      duration: 2500,
      verticalPosition: 'top',
      panelClass: ['color-snackbar'],
    });
  }
}