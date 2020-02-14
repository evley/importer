import { Component } from '@angular/core';

import { ImportMethod } from '@evley/importer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = 'fire';
  public importMethods = [ImportMethod.CSV];
}
