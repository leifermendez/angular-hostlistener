import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DrawCanvasComponent } from './components/draw-canvas/draw-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
