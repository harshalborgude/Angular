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
import { setBackground } from './customDirectives/setBackground.directive';
import { HighLightDirective } from './customDirectives/high-light.directive';
import { HoverDirective } from './customDirectives/hover.directive';
import { BetterhighlightDirective } from './customDirectives/betterhighlight.directive';
import { ClassDirective } from './customDirectives/class.directive';

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
    DemoForViewChildComponent,
    setBackground,
    HighLightDirective,
    HoverDirective,
    BetterhighlightDirective,
    ClassDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
