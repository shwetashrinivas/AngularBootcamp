import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassdirDirective } from './classdir.directive';
import { DuplicateDirective } from './duplicate.directive';

@NgModule({
  declarations: [
    AppComponent,
    ClassdirDirective,
    DuplicateDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
