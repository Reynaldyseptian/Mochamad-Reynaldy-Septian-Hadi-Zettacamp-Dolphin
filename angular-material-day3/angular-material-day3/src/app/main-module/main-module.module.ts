import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MainCardComponent } from './main-card/main-card.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MainPageComponent,
    MainCardComponent,
    MainFormComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    TranslateModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class MainModuleModule { }
