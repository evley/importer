import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImporterDialogData } from './import-dialog/importer-dialog-data.interface';
import { ImporterDialogComponent } from './import-dialog/importer-dialog.component';
import { ImportMethod } from './import-dialog/method/import-method.enum';

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrls: ['./importer.component.scss']
})
export class ImporterComponent {
  @Input() public appId: string;
  @Input() public importMethods: Array<keyof typeof ImportMethod> = [];

  constructor(private _dialog: MatDialog) {}

  public importData(): void {
    const data: ImporterDialogData = {
      appId: this.appId,
      methods: this.importMethods
    };
    const dialogRef = this._dialog.open(ImporterDialogComponent, {
      maxWidth: '50vw',
      autoFocus: false,
      data
    });
  }
}
