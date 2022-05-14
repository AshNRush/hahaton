import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: AuthorizationComponent },
];

@NgModule({
  declarations: [
    AuthorizationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AuthorizationModule { }
