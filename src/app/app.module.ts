import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import {HomeModule} from './modules/home/home.module';
import {LoginModule} from './modules/login/login.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, AppRoutingModule, HomeModule, LoginModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
