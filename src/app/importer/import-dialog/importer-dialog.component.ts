import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ImporterDialogData } from './importer-dialog-data.interface';
import { CsvService } from './method/csv/csv.service';
import { ImportMethod } from './method/import-method.enum';

@Component({
  templateUrl: './importer-dialog.component.html',
  styleUrls: ['./importer-dialog.component.scss']
})
export class ImporterDialogComponent {
  public selectedMethod: keyof typeof ImportMethod;
  private _csvFile: File;

  constructor(
    private _dialogRef: MatDialogRef<ImporterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImporterDialogData,
    private _csvService: CsvService
  ) {
    this.onSelectionChange(this.data.methods[0]);
  }

  public onSelectionChange(method: keyof typeof ImportMethod): void {
    this.selectedMethod = method;
  }

  public importData(): void {
    this._importBy[this.selectedMethod].call(this);
  }

  public get canImport(): boolean {
    return (
      Object.keys(ImportMethod).findIndex((key) => ImportMethod[key] === this.selectedMethod) >
        -1 && this._canImportBy[this.selectedMethod]
    );
  }

  public get isCSV(): boolean {
    return this.selectedMethod && this.selectedMethod === ImportMethod.CSV;
  }

  public onFileChange($event: Event): void {
    const file: File = $event.target['files'][0];
    if (file) {
      this._csvFile = file;
    }
  }

  private get _canImportBy(): { [key in ImportMethod]: boolean } {
    return {
      [ImportMethod.CSV]: this._csvFile && this._csvFile.size > 0
    };
  }

  private get _importBy(): { [key in ImportMethod]: () => void } {
    return {
      [ImportMethod.CSV]: () => this._importCSV()
    };
  }

  private _importCSV(): void {
    this._csvService
      .csvToJson(this._csvFile)
      .then((data) => this._setItemToLocalStorage(this.data.appId, data))
      .then(() => this._closeDialog());
  }

  private _closeDialog(): void {
    this._dialogRef.close();
  }

  private _setItemToLocalStorage(key: string, data: object): void {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
}
