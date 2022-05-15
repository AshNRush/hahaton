import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClient, HttpClientModule} from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'greeting',
        loadChildren: () => import('./greeting/greeting.module').then((m : any) => m.GreetingModule)
      },
      {
        path: 'authorization',
        loadChildren: () => import('./authorization/authorization.module').then((m : any) => m.AuthorizationModule),
      },
      {
        path: 'app',
        loadChildren: () => import('./layout/layout.module').then((m : any) => m.LayoutModule),
      },
      {
        path: '',
        redirectTo: '/app/map',
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
