import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreationComponent } from './user-creation.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes : Routes = [
  {path: 'creation-form/add-data', component:UserCreationComponent},
  {path: 'creation-form/:id', component:UserCreationComponent}
]

@NgModule({
  declarations: [
    UserCreationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserCreationModule { }
