import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImportDialogData } from './import-dialog/import-dialog-data.interface';
import { ImportDialogComponent } from './import-dialog/import-dialog.component';
import { ImportMethod } from './import-dialog/method/import-method.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _dialog: MatDialog) {}

  public importData(): void {
    const data: ImportDialogData = {
      appId: 'fire',
      methods: [ImportMethod.CSV, ImportMethod.GSHEET]
    };
    const dialogRef = this._dialog.open(ImportDialogComponent, {
      maxWidth: '50vw',
      autoFocus: false,
      data
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
