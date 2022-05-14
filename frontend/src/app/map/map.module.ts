import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import { MapComponent } from './map.component';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
    children: [
      {
        path: 'hints',
        loadChildren: () => import('./hints/hints.module').then((m : any) => m.HintsModule)
      },
      {
        path: 'progress',
        loadChildren: () => import('./progress/progress.module').then((m : any) => m.PullModule)
      },
    ],
  },
];

@NgModule({
  declarations: [
    MapComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
