import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  public appState: 'quest' | 'exhibition' = 'quest'
}
