import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListModule } from './user-list/user-list.module';
import { UserCreationModule } from './user-creation/user-creation.module';
import { UserDetailModule } from './user-detail/user-detail.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserListModule,
    UserCreationModule,
    UserDetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
