import { Component } from '@angular/core';

import { ImportMethod } from 'ngx-evley-importer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public appId = 'fire';
  public importMethods = [ImportMethod.CSV];
}
