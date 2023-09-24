import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAnimalFormComponent } from './admin-animal-form/admin-animal-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'




@NgModule({
  declarations: [
    AdminAnimalFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminAnimalFormComponent
  ]
})
export class AdminAnimalFormModule { }
