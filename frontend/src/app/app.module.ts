import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'greeting',
        loadChildren: () => import('./greeting/greeting.module').then((m : any) => m.AuthModule)
      },
      {
        path: 'authorization',
        loadChildren: () => import('./authorization/authorization.module').then((m : any) => m.LayoutNavigationModule),
      },
      {
        path: 'map',
        loadChildren: () => import('./map/map.module').then((m : any) => m.LayoutNavigationModule),
      },
      {
        path: '',
        redirectTo: '/map',
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
