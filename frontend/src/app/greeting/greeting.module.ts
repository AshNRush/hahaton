import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: GreetingComponent },
];

@NgModule({
  declarations: [
    GreetingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GreetingModule { }
