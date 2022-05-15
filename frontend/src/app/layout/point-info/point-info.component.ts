import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Point} from "../../models/point.model";
import {DataLoaderService} from "../../services/data-loader.service";

@Component({
  selector: 'point-info',
  templateUrl: './point-info.component.html',
  styleUrls: ['./point-info.component.css']
})
export class PointInfoComponent implements OnInit {
  public pointId: number = -1
  public point: Point | undefined

  constructor(private activateRoute: ActivatedRoute, private _data: DataLoaderService, private _router: Router) {
    this.pointId = activateRoute.snapshot.params['id'];
    this.point = this._data.unlockedPoints.find((point) => point.id == this.pointId)
  }

  getBack() {
    this._router.navigate(['/app/map'])
  }

  ngOnInit(): void { }

}
