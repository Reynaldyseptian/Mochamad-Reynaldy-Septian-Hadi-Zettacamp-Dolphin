import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BandDetailModule } from './band-detail/band-detail.module';
import { BandListModule } from './band-list/band-list.module';
import { FormAuditionModule } from './form-audition/form-audition.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BandDetailModule,
    BandListModule,
    FormAuditionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
