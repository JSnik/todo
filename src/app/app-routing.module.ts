import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './modules/login/login.component';
import {HomeComponent} from "./modules/home/home.component";
import {CurrencyComponent} from "./modules/currency/currency.component";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
    { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
    { path: 'login', loadChildren: () => import('./modules/report/report.module').then(m => m.ReportModule) },
    { path: 'home', loadChildren: () => import('./modules/currency/currency.module').then(m => m.CurrencyModule) },
    { path: '', component: CurrencyComponent},
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
