import { Component, OnInit } from '@angular/core';
import {DataLoaderService} from "../../services/data-loader.service";
import {Fragment} from "../../models/fragment.model";
import {Router} from "@angular/router";

@Component({
  selector: 'fragments',
  templateUrl: './fragments.component.html',
  styleUrls: ['./fragments.component.css']
})
export class FragmentsComponent implements OnInit {
  private _fragments: Array<Fragment> = []

  public get fragments() {
    return this._fragments.sort((a, b) => {
      return a > b ? 1 : -1
    })
  }

  constructor(private _data: DataLoaderService, private _router: Router) { }

  getBack() {
    this._router.navigate(['/app/map'])
  }

  getPointName(id: number) {
    return this._data.unlockedPoints.find((point) => point.id === id)?.name
  }

  ngOnInit(): void {
    this._fragments = this._data.getFragments()
  }
}
