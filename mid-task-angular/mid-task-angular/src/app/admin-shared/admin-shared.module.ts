import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSharedComponent } from './admin-shared/admin-shared.component';
import { AdminAnimalFormModule } from '../admin-animal-form/admin-animal-form.module';
import { AdminAnimalListModule } from '../admin-animal-list/admin-animal-list.module';




@NgModule({
  declarations: [
    AdminSharedComponent
  ],
  imports: [
    CommonModule,
    AdminAnimalFormModule,
    AdminAnimalListModule,
  ],
  exports: [
    AdminSharedComponent
  ]
})
export class AdminSharedModule { }
