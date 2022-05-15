import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FragmentsComponent } from './fragments.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '', component: FragmentsComponent
  },
];

@NgModule({
  declarations: [
    FragmentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class FragmentsModule { }
