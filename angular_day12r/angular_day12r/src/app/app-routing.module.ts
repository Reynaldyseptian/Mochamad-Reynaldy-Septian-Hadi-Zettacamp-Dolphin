import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: 'home', component:UserListComponent},
{path: '', redirectTo: 'home', pathMatch:'full'},
// {path: '**', redirectTo: '' },
{
  path: 'creation-form',
  loadChildren:()=> import('./user-creation/user-creation.module').then((m)=>m.UserCreationModule)
},
{
  path: 'user-detail',
  loadChildren:()=> import('./user-detail/user-detail.module').then((m)=>m.UserDetailModule)
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
