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
    new Point(1, 'Памятник Б. Н. Ельцину',  60.59132, 56.84475,true, 'Памятник Ельцину - монумент первому президенту Российской Федерации, советскому партийному и российскому политическому и государственному деятелю, одному из основателей, постсоветской России Борису Ельцину в Екатеринбурге'),
    new Point(2, 'Дом правительства', 60.59413, 56.84191,  false, 'Красивое здание')
  ]
  public nextHint: string = 'Вперед! Следующая точка находится справа от входа в Белый дом'
  public pointsCount: number = 20
  public username: string = 'Всеволод'

  public get unlockedPoints() : Array<Point>{
    return this.points.filter((point) => point.isPassed)
  }

  constructor(private _http: HttpClient) { }

  getPointsData() {
    return this._http.get('')
  }

  getFragments() {
    let fragments = []
    for (const point of this.unlockedPoints) {
      fragments.push(new Fragment(point.fragment, point.id))
    }

    return fragments
  }

  getEasters() {
    return this.unlockedPoints.filter((point) => point.easter)
  }
}
