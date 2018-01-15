import * as ol from 'openlayers';

export const getCoordinatesFromFeauture = (feature: ol.Feature) => {
  return feature.getGeometry().getCoordinates();
};

export const boundingExtent = (coordinates: ol.Coordinate[]) => {
  let ext = ol.extent.boundingExtent(coordinates);
  return ol.proj.transformExtent(ext, ol.proj.get('EPSG:3857'), ol.proj.get('EPSG:3857'));
};
