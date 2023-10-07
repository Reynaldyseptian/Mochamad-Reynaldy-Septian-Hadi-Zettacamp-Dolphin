import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';
import { HomeCardComponent } from './home-card/home-card.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    HomePageComponent,
    HomeCardComponent,
    HomeAboutComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
