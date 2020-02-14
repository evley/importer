import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxEvleyImporterModule } from 'ngx-evley-importer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, NgxEvleyImporterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
