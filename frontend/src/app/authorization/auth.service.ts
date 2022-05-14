import {Injectable} from "@angular/core";
import {AuthModel} from "./auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public token: string | null = null

  public setToken(data: AuthModel) {
    //ну типа фетч кароче
    this.token = 'token'
  }

  public checkToken() : boolean {
    //ну типа фетч кароче
    return true
  }

  public clearToken() {
    this.token = null
  }
}
