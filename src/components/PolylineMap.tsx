import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const PolylineMap = () => {
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
      <Polyline
        coordinates={[
          {latitude: 37.8025259, longitude: -122.4351431},
          {latitude: 37.7896386, longitude: -122.421646},
          {latitude: 37.7665248, longitude: -122.4161628},
          {latitude: 37.7734153, longitude: -122.4577787},
          {latitude: 37.7948605, longitude: -122.4596065},
          {latitude: 37.8025259, longitude: -122.4351431}
        ]}
        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
        strokeColors={[
          '#7F0000',
          '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
          '#B24112',
          '#E5845C',
          '#238C23',
          '#7F0000'
        ]}
        strokeWidth={6}
      />
    </MapView>
  );
};

export default PolylineMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
