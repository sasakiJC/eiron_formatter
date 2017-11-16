import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
		FormsModule,
		MatTabsModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]        // ポイント３
})
export class AppModule {}
