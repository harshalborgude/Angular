import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { percentagePipe } from './percentage.pipe';
import { genderFilterPipe } from './genderFilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    percentagePipe,
    genderFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
