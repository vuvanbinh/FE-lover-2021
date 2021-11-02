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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
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
    MatButtonModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
