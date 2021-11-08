import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login-register/login/login.component";
import {RegisterComponent} from "./login-register/register/register.component";
import {HomeComponent} from "./content/home/home.component";
import {CreateComponent} from "./content/supplier/create/create.component";
import {CreateServiceComponent} from "./content/services/create-service/create-service.component";
import {DetailSupplierComponent} from "./content/supplier/detail-supplier/detail-supplier.component";
import {AdminPageComponent} from "./content/admin/admin-page/admin-page.component";
import {SupplierProfileComponent} from "./content/supplier/supplier-profile/supplier-profile.component";
import {OrderComponent} from "./content/orders/order/order.component";

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'create-supplier', component:CreateComponent},
  {path:'create-services',component:CreateServiceComponent},
  {path:'detail-supplier/:id',component:DetailSupplierComponent},
  {path:'admin',component:AdminPageComponent},
  {path:'profile-supplier',component:SupplierProfileComponent},
  {path:'order',component:OrderComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
