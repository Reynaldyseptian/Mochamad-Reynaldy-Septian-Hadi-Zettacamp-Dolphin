import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAnimalListComponent } from './admin-animal-list/admin-animal-list.component';
import { AdminAnimalCardComponent } from './admin-animal-card/admin-animal-card.component';
import { RouterModule } from '@angular/router';
import { AdminAnimalFormModule } from '../admin-animal-form/admin-animal-form.module';
// import { AdminAnimalDetailComponent } from './admin-animal-detail/admin-animal-detail.component';


@NgModule({
  declarations: [
    AdminAnimalListComponent,
    AdminAnimalCardComponent,
    // AdminAnimalDetailComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminAnimalFormModule
  ],
  exports: [
    AdminAnimalListComponent
  ]
})
export class AdminAnimalListModule { }
