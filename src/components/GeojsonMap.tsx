import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Geojson } from 'react-native-maps';

const GeojsonMap = () => {
  return (
    <MapView
      style={styles.map}
      region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      }}
      mapType={'standard'}
      showsUserLocation={true}
      followsUserLocation={true}
      userLocationAnnotationTitle={'OOO location'}
      loadingEnabled={true}
    >
      <Geojson geojson={{
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Point',
              coordinates: [37.78825, -122.4324],
            }
          }
        ]
      }}/>
    </MapView>
  );
};

export default GeojsonMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
