import {Component, OnInit} from '@angular/core';
import Map from 'ol/Map';
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import * as olProj from 'ol/proj';
import {Feature} from "ol";
import {LineString, Point, Polygon} from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {Control, Zoom} from 'ol/control';
import {Router} from "@angular/router";
import {DataLoaderService} from "../../services/data-loader.service";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../authorization/auth.service";

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public map : Map = new Map({});
  public hint : string

  constructor(private _router: Router, private _data: DataLoaderService, private _http: HttpClient, private _auth: AuthService) {
    this.hint = this._data.nextHint
  }

  openProgress() {
    this._router.navigate(['/app/progress'])
  }

  openHints() {
    this._router.navigate(['/app/fragments'])
  }

  ngOnInit(): void {
    let vectorSource = new VectorSource({
      features: []
    })

    this._http
      .get(`http://localhost:8000/user/${this._auth.token}/`)
      .subscribe((data: any) => {
        for (const point of data.passedPoints) {
          vectorSource.addFeature(new Feature({
            geometry: new Point([point.lat, point.lon])
          }))
        }
      })


    let controls = [
      new Zoom({
        className: 'map-buttons-group',
        zoomInClassName: 'map-button',
        zoomOutClassName: 'map-button',
      })
    ]

    olProj.useGeographic()

    this.map = new Map({
      view: new View({
        center: [60.60372522826924, 56.8378198280985],
        zoom: 12
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        new VectorLayer({
          source: vectorSource
        })
      ],
      controls: controls,
      target: 'map'
    });
  }
}
