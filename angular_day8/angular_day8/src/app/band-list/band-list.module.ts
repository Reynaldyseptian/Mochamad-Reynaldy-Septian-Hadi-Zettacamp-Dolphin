import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandListComponent } from './band-list/band-list.component';
import { BandCardComponent } from './band-card/band-card.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    BandListComponent,
    BandCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BandListComponent
  ]
})
export class BandListModule { }
