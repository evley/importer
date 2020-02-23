import { Component } from '@angular/core';

import { ImportMethod } from '@evley/importer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = 'demo';
  public importMethods = [ImportMethod.CSV];

  public onImportClosed(imported: boolean): void {
    console.log('Imported:', imported);
  }
}
