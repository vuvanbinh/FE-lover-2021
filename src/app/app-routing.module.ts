import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login-register/login/login.component";
import {RegisterComponent} from "./login-register/register/register.component";
import {HomeComponent} from "./content/home/home.component";
import {CreateSupplierComponent} from "./content/supplier/create-supplier/create-supplier.component";
import {EditSupplierComponent} from "./content/supplier/edit-supplier/edit-supplier.component";

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'supplier/create',component:CreateSupplierComponent},
  {path:'supplier/edit',component:EditSupplierComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
