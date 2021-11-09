import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav-footer/nav/nav.component';
import {MatIconModule} from "@angular/material/icon";
import { FooterComponent } from './nav-footer/footer/footer.component';
import { LoginComponent } from './login-register/login/login.component';
import { RegisterComponent } from './login-register/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './content/home/home.component';
import {httpInterceptorProviders} from "./security/auth.interceptor";
import { CreateComponent } from './content/supplier/create/create.component';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment.prod";
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import { CreateServiceComponent } from './content/services/create-service/create-service.component';
import { DetailSupplierComponent } from './content/supplier/detail-supplier/detail-supplier.component';
import { AdminPageComponent } from './content/admin/admin-page/admin-page.component';
import {MatTableModule} from "@angular/material/table";
import { SupplierProfileComponent } from './content/supplier/supplier-profile/supplier-profile.component';
import { OrderCreateComponent } from './content/orders/order-create/order-create.component';
import {MatDatepickerModule} from "@angular/material/datepicker";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreateComponent,
    UploadAvatarComponent,
    CreateServiceComponent,
    DetailSupplierComponent,
    AdminPageComponent,
    SupplierProfileComponent,
    OrderCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
