import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointInfoComponent } from './point-info.component';
import {RouterModule, Routes} from "@angular/router";

@NgModule({
  declarations: [
    PointInfoComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class PointInfoModule { }
