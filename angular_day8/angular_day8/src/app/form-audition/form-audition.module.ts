import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuditionComponent } from './form-audition/form-audition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { BandListComponent } from '../band-list/band-list/band-list.component';

const routes : Routes = [
  {path: 'form/add-data', component:FormAuditionComponent},
  {path:'form/:id', component:FormAuditionComponent},
]
@NgModule({
  declarations: [
    FormAuditionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    FormAuditionComponent
  ]
})
export class FormAuditionModule { }
