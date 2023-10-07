import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {
    path: 'detail-page',
    loadChildren: ()=>import('./detail-page/detail-page.module').then((m)=>m.DetailPageModule)
  },
  {
    path: 'creation-form',
    loadChildren:()=> import('./creation-form/creation-form.module').then((m)=>m.CreationFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
