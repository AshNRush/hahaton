import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthorizationModule} from "./authorization.module";
import {AuthModel} from "./auth.model";
import {Router} from "@angular/router";
import {DataLoaderService} from "../../services/data-loader.service";
import {AuthService} from "./auth.service";

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public form: FormGroup = this._fb.group({
    phone: ['', [Validators.required]],
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
  })

  constructor(private _fb: FormBuilder, private _router: Router, private _auth: AuthService, private _data: DataLoaderService) { }

  ngOnInit(): void {}

  public toModel() : AuthModel{
    return new AuthModel(this.form.get('phone')?.value, this.form.get('name')?.value, this.form.get('type')?.value)
  }

  public submit() {
    if(this.form.valid) {
      this._router.navigate(['/greeting'])
      this._auth.setToken(this.toModel())
      this._data.appState = this.form.get('type')?.value;
    }
  }
}
