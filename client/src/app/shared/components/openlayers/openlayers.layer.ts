import { getCoordinatesFromFeauture, boundingExtent } from './openlayers.helper';

import * as ol from 'openlayers';

export class Layer {
  public features: ol.Feature[] = [];

  private source: ol.source.Vector = new ol.source.Vector();
  private vector: ol.layer.Vector = new ol.layer.Vector({ source: this.source });

  constructor(public map: ol.Map) {
    this.map.addLayer(this.vector);
  }

  getLayer(): ol.layer.Vector {
    return this.vector;
  }

  setStyle(style: any) {
    this.vector.setStyle(style);
  }

  add(coords: ol.proj.fromLonLat): ol.Feature {
    const feature = new ol.Feature(new ol.geom.Point(coords));

    return this.addFeature(feature);
  }

  addFeature(feature: ol.Feature): ol.Feature {
    this.source.addFeature(feature);
    this.features.push(feature);

    return feature;
  }

  clear() {
    this.features.forEach((feauture) => {
      this.source.removeFeature(feauture);
    });

    this.features = [];
  }

  hideAll() {
    const emptyImgStyle = new ol.style.Style({
      image: '',
      visibility: 'hidden'
    });

    for(let i = 0; i < this.features.length; i += 1) {
      const feature = this.features[i];
      feature.setStyle(emptyImgStyle);
    }
  }

}
