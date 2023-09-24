import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingPageComponent } from './testing-page/testing-page.component';



@NgModule({
  declarations: [
    TestingPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TestingPageComponent
  ]
})
export class TestModule { }
