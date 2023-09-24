import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAnimalDetailComponent } from './detail-page/admin-animal-detail/admin-animal-detail.component';
import { AdminAnimalListComponent } from './home-page/admin-animal-list/admin-animal-list/admin-animal-list.component';


const routes: Routes = [
  {path:'',component:AdminAnimalListComponent},
  {path:'detail/:id',component:AdminAnimalDetailComponent},
  {path:'home',component:AdminAnimalListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
