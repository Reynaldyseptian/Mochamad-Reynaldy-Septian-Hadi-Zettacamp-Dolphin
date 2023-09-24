import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './main-home/main-home.component';



@NgModule({
  declarations: [
    MainHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainHomeComponent
  ]
})
export class MainHomeModuleModule { }
