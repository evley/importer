import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

import { ImporterDialogModule } from './importer-dialog/importer-dialog.module';
import { NgxEvleyImporterComponent } from './ngx-evley-importer.component';

@NgModule({
  declarations: [NgxEvleyImporterComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, ImporterDialogModule],
  exports: [NgxEvleyImporterComponent]
})
export class NgxEvleyImporterModule {}
