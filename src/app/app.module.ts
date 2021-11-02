import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './compunent/navbar/navbar.component';
import { FooterComponent } from './compunent/footer/footer.component';
import { BannerComponent } from './compunent/banner/banner.component';
import {MatIconModule} from "@angular/material/icon";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './compunent/list/list.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { RegisterComponent } from './compunent/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './compunent/home/home.component';
import { ListUserComponent } from './compunent/user/list-user/list-user.component';
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import { DetailUserComponent } from './compunent/user/detail-user/detail-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    ListComponent,
    RegisterComponent,
    HomeComponent,
    ListUserComponent,
    DetailUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        NgbModule,
        MatMenuModule,
        MatToolbarModule,
        HttpClientModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
