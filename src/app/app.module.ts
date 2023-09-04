import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  MaterialModule,
    BrowserAnimationsModule,
    HeaderFooterComponent,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
