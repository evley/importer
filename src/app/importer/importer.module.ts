import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { ImporterDialogModule } from './import-dialog/importer-dialog.module';
import { ImporterComponent } from './importer.component';

@NgModule({
  declarations: [ImporterComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, ImporterDialogModule],
  exports: [ImporterComponent]
})
export class ImporterModule {}
