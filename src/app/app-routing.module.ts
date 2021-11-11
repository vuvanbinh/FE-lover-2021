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
import {OrderCreateComponent} from "./content/orders/order-create/order-create.component";
import {OderDetailComponent} from "./content/orders/oder-detail/oder-detail.component";
import {CustomerProfileComponent} from "./content/user/customer-profile/customer-profile.component";
import {AdminOrderDetailComponent} from "./content/admin/admin-order-detail/admin-order-detail.component";
import {UpdateAvatarComponent} from "./content/user/update-avatar/update-avatar.component";
import {NavComponent} from "./nav-footer/nav/nav.component";

const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'create-supplier', component:CreateComponent},
  {path:'create-services',component:CreateServiceComponent},
  {path:'detail-supplier/:id',component:DetailSupplierComponent},
  {path:'admin',component:AdminPageComponent},
  {path:'profile-supplier',component:SupplierProfileComponent},
  {path:'order-create/:id',component:OrderCreateComponent},
  {path:'order-detail/:id',component:OderDetailComponent},
  {path:'customer-profile', component:CustomerProfileComponent},
  {path:'admin-order-detail/:id', component:AdminOrderDetailComponent},
  {path:'update-avatar', component:UpdateAvatarComponent},
  {path:'nav',component:NavComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
