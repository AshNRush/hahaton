import { Component, OnInit } from '@angular/core';
import {DataLoaderService} from "../../services/data-loader.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  constructor(private _data: DataLoaderService, private _router: Router) { }

  getBack() {
    this._router.navigate(['/app/map'])
  }

  ngOnInit(): void {
  }
}
