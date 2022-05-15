import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointInfoComponent } from './point-info.component';
import {RouterModule, Routes} from "@angular/router";
import {MapComponent} from "../map/map.component";

const routes: Routes = [
  {
    path: '', component: PointInfoComponent
  },
];

@NgModule({
  declarations: [
    PointInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PointInfoModule { }
