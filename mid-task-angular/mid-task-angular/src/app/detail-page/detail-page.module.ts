import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAnimalDetailComponent } from './admin-animal-detail/admin-animal-detail.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AdminAnimalDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AdminAnimalDetailComponent,
    RouterModule
  ]
})
export class DetailPageModule { }
