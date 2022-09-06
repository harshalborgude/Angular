import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WelcomeService } from './welcome.service';
import { Comp2Component } from './comp2/comp2.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp2Component,

  ],
  imports: [
    BrowserModule
  ],
  providers: [WelcomeService], // by providing this service here in app module , it will be available in all the child components.
  bootstrap: [AppComponent]
})
export class AppModule { }
