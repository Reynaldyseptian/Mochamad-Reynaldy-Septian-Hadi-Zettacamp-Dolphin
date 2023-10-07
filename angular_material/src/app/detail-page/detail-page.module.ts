import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule

  ],
  exports:[
    DetailPageComponent
  ]
})
export class DetailPageModule { }
