import {Injectable} from "@angular/core";
import {AuthModel} from "./auth.model";
import {HttpClient} from "@angular/common/http";
import {jsonp} from "ol/net";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string | null = null

  constructor(private _http: HttpClient) {
  }

  public setToken(data: AuthModel) {
    this._http.post(
      'http://localhost:8000/users/',
      {
        'name': data.name,
        'phone': data.phone
      }).subscribe((data : any) => {
      this.token = data.id
    })
  }

  public checkToken(): Observable<Object> {
    return this._http
      .get(`http://localhost:8000/check/${this.token}`)
  }

  public clearToken() {
    this.token = null
  }
}
