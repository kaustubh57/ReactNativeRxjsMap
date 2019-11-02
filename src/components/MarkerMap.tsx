import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
// @ts-ignore
import carImage from '../assets/car.png';

const MarkerMap = () => {
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
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324
        }}
        title={'marker.title'}
        description={'marker.description'}
        image={carImage}
      />
    </MapView>
  );
};

export default MarkerMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
