import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatDialogModule, MatMenuModule, MatIconModule, MatButtonModule],
  exports: [MatDialogModule, MatMenuModule, MatIconModule, MatButtonModule],
})
export class MaterialModule {}
