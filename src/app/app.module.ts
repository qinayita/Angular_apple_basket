import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppleComponent } from './apple/apple.component';
import { AppleBasketComponent } from './apple-basket/apple-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    AppleComponent,
    AppleBasketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
