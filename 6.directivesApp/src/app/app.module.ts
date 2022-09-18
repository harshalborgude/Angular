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
import { ViewChildDecoratorComponent } from './view-child-decorator/view-child-decorator.component';
import { DemoForViewChildComponent } from './demo-for-view-child/demo-for-view-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StyleComponent,
    ClassDirComponent,
    IfdirComponent,
    IfelseComponent,
    NgswitchComponent,
    NgforComponent,
    NgforobjectComponent,
    ViewChildDecoratorComponent,
    DemoForViewChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
