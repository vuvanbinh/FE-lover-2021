import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./compunent/login/login.component";
import {RegisterComponent} from "./compunent/register/register.component";
import {HomeComponent} from "./compunent/home/home.component";
import {DetailUserComponent} from "./compunent/user/detail-user/detail-user.component";
import {ListComponent} from "./compunent/list/list.component";

const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'login',component: LoginComponent},
  {path : 'register',component: RegisterComponent},
  {path : 'user-detail/:id',component: DetailUserComponent},
  {path : 'user-list',component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
