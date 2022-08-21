import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { PhotoGridComponent } from './photo-grid/photo-grid.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PhotoGridComponent,
    PhotoCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
