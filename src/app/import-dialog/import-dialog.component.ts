import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ImportDialogData } from './import-dialog-data.interface';
import { CsvService } from './method/csv/csv.service';
import { ImportMethod } from './method/import-method.enum';

@Component({
  selector: 'app-import-dialog',
  templateUrl: './import-dialog.component.html',
  styleUrls: ['./import-dialog.component.scss']
})
export class ImportDialogComponent {
  private _selectedMethod: keyof typeof ImportMethod;
  private _csvFile: File;

  constructor(
    private _dialogRef: MatDialogRef<ImportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImportDialogData,
    private _csvService: CsvService
  ) {}

  public onSelectionChange(method: keyof typeof ImportMethod): void {
    this._selectedMethod = method;
  }

  public importData(): void {
    this._importBy[this._selectedMethod].call(this);
  }

  public get canImport(): boolean {
    return (
      Object.keys(ImportMethod).findIndex((key) => ImportMethod[key] === this._selectedMethod) >
        -1 && this._canImportBy[this._selectedMethod]
    );
  }

  public get isCSV(): boolean {
    return this._selectedMethod && this._selectedMethod === ImportMethod.CSV;
  }

  public onFileChange($event: Event): void {
    const file: File = $event.target['files'][0];
    if (file) {
      this._csvFile = file;
    }
  }

  private get _canImportBy(): { [key in ImportMethod]: boolean } {
    return {
      [ImportMethod.CSV]: this._csvFile && this._csvFile.size > 0,
      [ImportMethod.GSHEET]: true
    };
  }

  private get _importBy(): { [key in ImportMethod]: () => void } {
    return {
      [ImportMethod.CSV]: () => this._importCSV(),
      [ImportMethod.GSHEET]: () => this._importGSHEET()
    };
  }

  private _importCSV(): void {
    this._csvService
      .csvToJson(this._csvFile)
      .then((data) => this._setItemToLocalStorage(this.data.appId, data))
      .then(() => this._closeDialog());
  }

  private _importGSHEET(): void {
    console.log('#### importing GSHEET');
    // TODO: GSHEET import
  }

  private _closeDialog(): void {
    this._dialogRef.close();
  }

  private _setItemToLocalStorage(key: string, data: object): void {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
}
