import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import {AngularMaterialModule} from '../angular-material/angular-material.module';



@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AboutPageComponent
  ]
})
export class AboutPageModule { }
