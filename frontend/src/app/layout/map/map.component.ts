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
import { Zoom} from 'ol/control';
import {Router} from "@angular/router";
import {DataLoaderService} from "../../services/data-loader.service";
import {Icon, Style} from "ol/style";
import {PointInfoComponent} from "../point-info/point-info.component";

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public map : Map = new Map({});
  public hint : string

  constructor(private _router: Router, private _data: DataLoaderService) {
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

    for (const point of this._data.unlockedPoints){
      let feature = new Feature({
        geometry: new Point([point.lat, point.lon])
      })
      feature.setStyle(new Style({
        image: new Icon({
          color: '#4263fc',
          src: '/assets/pics/square.svg',
          scale: 1,
        })
      }))
      vectorSource.addFeature(feature)
    }

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
      controls: [],
      target: 'map'
    });

    this.map.on('click', (evt) => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, (feature) => feature);
      if (feature) {
        let geometry = feature.getGeometry()
        if (geometry instanceof Point){
          let coords = geometry.getFlatCoordinates()
          let id = this._data.unlockedPoints.find((point) => point.lat === coords[0] && point.lon === coords[1])?.id
          this._router.navigate(['/app/point/', id])
        }
      }
    });
  }
}
