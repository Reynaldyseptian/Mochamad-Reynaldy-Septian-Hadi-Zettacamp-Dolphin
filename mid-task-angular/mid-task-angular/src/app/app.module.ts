import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminAnimalListModule } from './home-page/admin-animal-list/admin-animal-list.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminAnimalListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
