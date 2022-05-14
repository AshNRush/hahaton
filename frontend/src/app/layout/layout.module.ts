import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'hints',
        loadChildren: () => import('./hints/hints.module').then((m : any) => m.HintsModule)
      },
      {
        path: 'progress',
        loadChildren: () => import('./progress/progress.module').then((m : any) => m.ProgressModule)
      },
      {
        path: 'map',
        loadChildren: () => import('./map/map.module').then((m : any) => m.MapModule)
      },
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LayoutModule { }