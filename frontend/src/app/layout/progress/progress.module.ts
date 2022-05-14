import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: '', component: ProgressComponent },
];

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProgressModule { }
