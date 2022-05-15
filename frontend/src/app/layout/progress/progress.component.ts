import { Component, OnInit } from '@angular/core';
import {DataLoaderService} from "../../services/data-loader.service";
import {Router} from "@angular/router";
import {Point} from "../../models/point.model";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  public pointsCount: number
  public points: Point[]
  public easters: Point[]
  public username: string

  public get width() {
    return (this.points.length / this.pointsCount * 100) + '%'

  }

  constructor(private _data: DataLoaderService, private _router: Router) {
    this.pointsCount = this._data.pointsCount
    this.points = this._data.unlockedPoints
    this.easters = this._data.getEasters()
    this.username = this._data.username
  }

  getBack() {
    this._router.navigate(['/app/map'])
  }

  ngOnInit(): void {
  }
}
