import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainHomeModuleModule } from './main-home-module/main-home-module.module';
import { CategoryHomeModuleModule } from './category-home-module/category-home-module.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainHomeModuleModule,
    CategoryHomeModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
