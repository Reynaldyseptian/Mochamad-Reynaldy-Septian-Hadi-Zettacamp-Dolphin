import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandListComponent } from './band-list/band-list/band-list.component';

const routes: Routes = [
  {path: '', component:BandListComponent},

  { path: '', redirectTo: 'bands', pathMatch: 'full' }, 
  {
    path: 'band-detail',
    loadChildren: () => import('./band-detail/band-detail.module').then((m) => m.BandDetailModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./form-audition/form-audition.module').then((m) => m.FormAuditionModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
