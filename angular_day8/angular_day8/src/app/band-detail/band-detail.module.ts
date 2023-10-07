import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandDetailComponent } from './band-detail/band-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: 'detail/:id', component:BandDetailComponent},
]

@NgModule({
  declarations: [
    BandDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    BandDetailComponent
  ]
})
export class BandDetailModule { }
