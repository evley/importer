import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ImporterDialogData } from './importer-dialog/importer-dialog-data.interface';
import { ImporterDialogComponent } from './importer-dialog/importer-dialog.component';
import { ImportMethod } from './importer-dialog/method/import-method.enum';

@Component({
  selector: 'evley-importer',
  templateUrl: './importer.component.html'
})
export class ImporterComponent {
  @Input() public name: string = 'evley-import';
  @Input() public importMethods: Array<keyof typeof ImportMethod> = Object.values(ImportMethod);
  @Output() public importClosed = new EventEmitter<boolean>();

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

    dialogRef.afterClosed().subscribe((imported: boolean) => this.importClosed.emit(imported));
  }
}
