import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImporterDialogData } from './importer-dialog/importer-dialog-data.interface';
import { ImporterDialogComponent } from './importer-dialog/importer-dialog.component';
import { ImportMethod } from './importer-dialog/method/import-method.enum';

@Component({
  selector: 'evley-importer',
  templateUrl: './importer.component.html'
})
export class ImporterComponent {
  @Input() public name: string;
  @Input() public importMethods: Array<keyof typeof ImportMethod> = [];

  constructor(private _dialog: MatDialog) {}

  public importData(): void {
    const data: ImporterDialogData = {
      name: this.name,
      methods: this.importMethods
    };
    const dialogRef = this._dialog.open(ImporterDialogComponent, {
      maxWidth: '50vw',
      autoFocus: false,
      data
    });
  }
}
