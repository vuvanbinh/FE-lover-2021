import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./compunent/login/login.component";
import {RegisterComponent} from "./compunent/register/register.component";
import {HomeComponent} from "./compunent/home/home.component";

const routes: Routes = [
  {path : '',component: HomeComponent},
  {path : 'login',component: LoginComponent},
  {path : 'register',component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
