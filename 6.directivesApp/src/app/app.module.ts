import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StyleComponent } from './style/style.component';
import { ClassDirComponent } from './class-dir/class-dir.component';
import { IfdirComponent } from './ifdir/ifdir.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgforobjectComponent } from './ngforobject/ngforobject.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    ClassDirComponent,
    IfdirComponent,
    IfelseComponent,
    NgswitchComponent,
    NgforComponent,
    NgforobjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
