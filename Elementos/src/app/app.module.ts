import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScreenService } from './screen.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
