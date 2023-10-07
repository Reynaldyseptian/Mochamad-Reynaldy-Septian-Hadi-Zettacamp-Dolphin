import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page/about-page.component';
import { DetailPageComponent } from './detail-page/detail-page/detail-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'detail/:id',component:DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
