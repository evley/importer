import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EvleyImporterModule } from '@evley/importer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, EvleyImporterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
