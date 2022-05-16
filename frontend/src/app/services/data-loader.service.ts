import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Fragment} from "../models/fragment.model";
import {Point} from "../models/point.model";

@Injectable({
  providedIn: 'root'
})
export class DataLoaderService {
  public appState: 'quest' | 'exhibition' = 'quest'
  public points: Array<Point> = [
    new Point(1, 'Ельцин-Центр',  60.59132, 56.84475,true, 'Музей первого президента России'),
    new Point(2, 'Дом правительства', 60.59413, 56.84191,  false, 'Красивое здание')
  ]
  public easterEggs: Array<Point> = []
  public nextHint: string = 'Подсказка'
  public get unlockedPoints() : Array<Point>{
    return this.points.filter((point) => point.isPassed)
  }

  public get lockedPoints() : Array<Point>{
    return this.points.filter((point) => !point.isPassed)
  }

  constructor(private _http: HttpClient) { }

  getPointsData() {
    return this._http.get('')
  }

  getFragments() {
    let fragments = []
    for (const point of this.unlockedPoints) {
      fragments.push(new Fragment(point.text, point.id))
    }

    return fragments
  }
}
