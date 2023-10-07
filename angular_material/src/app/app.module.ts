import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageModule } from './home-page/home-page.module';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AboutPageModule } from './about-page/about-page.module';
import { DetailPageModule } from './detail-page/detail-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomePageModule,
    AngularMaterialModule,
    AboutPageModule,
    DetailPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
