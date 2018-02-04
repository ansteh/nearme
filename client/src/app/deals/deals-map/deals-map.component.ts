import { Component, Input, ElementRef, EventEmitter, OnInit, Output, ViewChild, OnChanges } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';

import { Layer } from '../../shared/components/openlayers/openlayers.layer';

import * as ol from 'openlayers';
import * as _ from 'lodash';

@Component({
  selector: 'deals-map',
  templateUrl: './deals-map.component.html',
  styleUrls: ['./deals-map.component.scss']
})
export class DealsMapComponent implements OnInit, OnChanges {
  @ViewChild('map') mapTarget: ElementRef;

  @Input() deals: any[];
  @Output() dealClicked = new EventEmitter();
  @Output() clickCoordinate = new EventEmitter();

  private map: ol.Map;
  private markers: { [name: string]: Layer; } = {};

  private states: string[] = ['RUNNER', 'STORE', 'REQUEST'];
  private rendered: boolean = false;

  constructor() { }

  ngOnInit() {
    this.initMap();

    if(this.deals) {
      this.setMarkers(this.deals);
    }
  }

  ngOnChanges() {
    if(this.map) {
      this.setMarkers(this.deals);
    }
  }

  private clear() {
    if(this.map && this.markers) {
      this.states.forEach((key) => {
        this.markers[key].clear();
      });
    }
  }

  private initMap() {
    this.map = new ol.Map({
      target: this.mapTarget.nativeElement,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        // center: ol.proj.fromLonLat([37.41, 8.82]),
        // zoom: 4
        maxZoom: 19,
      })
    });

    this.markers['STORE'] = new Layer(this.map);
    this.markers['RUNNER'] = new Layer(this.map);
    this.markers['REQUEST'] = new Layer(this.map);

    this.markers['STORE'].setStyle(new ol.style.Style({
      image: new ol.style.Icon({
        src: '/assets/images/store.svg',
        size: [54, 48],
        scale: 0.8,
        opacity: 0.8
      })
    }));

    this.markers['RUNNER'].setStyle(new ol.style.Style({
      image: new ol.style.Icon({
        src: '/assets/images/runner.svg',
        size: [54, 48],
        scale: 0.8,
        opacity: 0.8
      })
    }));

    this.markers['REQUEST'].setStyle(new ol.style.Style({
      image: new ol.style.Icon({
        src: '/assets/images/request.svg',
        size: [54, 48],
        scale: 0.8,
        opacity: 0.8
      })
    }));

    this.map.on('click', (evt) => {
      const feature = this.map.forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
        //you can add a condition on layer to restrict the listener
        return feature;
      });

      if(feature){
        const deal = feature.get('deal');
        this.dealClicked.emit(deal);
      } else {
        const lonlat = ol.proj.transform(evt.coordinate, 'EPSG:3857', 'EPSG:4326');
        
        this.clickCoordinate.emit({
          longitude: lonlat[0],
          latitude: lonlat[1]
        });
      }
    });
  }

  private setMarkers(deals: any[]) {
    this.clear();

    for (let i = 0; i < deals.length; i++) {
      const deal = deals[i];
      this.setMarker(deal);
    }

    if(deals.length > 1) {
      const coordinates = [];

      this.states.forEach((key) => {
        const markers = this.markers[key];

        markers.features.forEach((feature) => {
          coordinates.push(feature.getGeometry().getCoordinates());
        });
      });

      if(!this.rendered) {
        var ext = ol.extent.boundingExtent(coordinates);
        ext = ol.proj.transformExtent(ext, ol.proj.get('EPSG:3857'), ol.proj.get('EPSG:3857'));

        this.map.getView().fit(ext, { size: this.map.getSize(), padding: [30, 30, 30, 30] });

        this.rendered = true;
      }
    } else if(deals.length === 1) {

      const deal = deals[0];

      const coords = ol.proj.fromLonLat([
        deal.position.longitude,
        deal.position.latitude,
      ]);

      if(!this.rendered) {
        this.map.getView().animate({
          center: coords,
          zoom: 10,
          duration: 0,
        });

        this.rendered = true;
      }
    }
  }

  private setMarker(deal: any) {
    if(_.get(deal, 'type') &&
       _.get(deal, 'position.latitude') &&
       _.get(deal, 'position.longitude')) {
      const coords = ol.proj.fromLonLat([
        deal.position.longitude,
        deal.position.latitude,
      ]);

      if(deal.type) {
        const feature: ol.Feature = this.markers[deal.type].add(coords);
        feature.set('deal', deal);
      }
    }
  }

}
