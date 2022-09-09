import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuiltInPipeComponent } from './built-in-pipe/built-in-pipe.component';
import { fileSizePipe } from './file-pipe.pipe';
import { CustomFilePipeComponent } from './custom-file-pipe/custom-file-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    BuiltInPipeComponent,
    fileSizePipe,
    CustomFilePipeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
