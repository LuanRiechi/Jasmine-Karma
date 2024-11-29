import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';

@NgModule({

  imports: [
    AppComponent,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [LikeWidgetModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
