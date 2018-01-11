import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReverseStringPipe } from "./shared/reverse-string.pipe";
import { SortByNamePipe } from "./shared/sort-by-name.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ReverseStringPipe,
    SortByNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
