import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DataLoaderService} from "../../services/data-loader.service";

@Component({
  selector: 'greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

  constructor(private _router: Router) { }

  public okClick() {
    this._router.navigate(['/authorization'])
  }

  ngOnInit(): void {
  }
}
