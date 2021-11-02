import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login-register/login/login.component";
import {RegisterComponent} from "./login-register/register/register.component";
import {HomeComponent} from "./content/home/home.component";

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
