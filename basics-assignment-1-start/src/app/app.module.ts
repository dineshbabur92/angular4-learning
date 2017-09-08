import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningPromptComponent } from './warning-prompt/warning-prompt.component';
import { SuccessPromptComponent } from "./success-prompt/success-prompt.component";

@NgModule({
  declarations: [
    AppComponent,
    WarningPromptComponent,
    SuccessPromptComponent
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
