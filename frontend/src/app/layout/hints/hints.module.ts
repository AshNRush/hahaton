import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HintsComponent } from './hints.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: HintsComponent
  },
];

@NgModule({
  declarations: [
    HintsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HintsModule { }
