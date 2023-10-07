import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationFormComponent } from './creation-form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


const routes : Routes = [
  {path: 'creation-form/add-data', component:CreationFormComponent},
  {path: 'creation-form/:id', component:CreationFormComponent}
]

@NgModule({
  declarations: [
    CreationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    TranslateModule
  ]
})
export class CreationFormModule { }
