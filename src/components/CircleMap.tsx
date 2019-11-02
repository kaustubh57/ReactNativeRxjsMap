import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Circle } from 'react-native-maps';

const CircleMap = () => {
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
      <Circle center={{latitude: 37.78825, longitude: -122.4324}}
              radius={700}
              fillColor="rgba(255, 255, 255, 0.6)"
              strokeColor="rgba(0,0,0,0.5)"
              zIndex={2}
              strokeWidth={2}
      />
    </MapView>
  );
};

export default CircleMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
