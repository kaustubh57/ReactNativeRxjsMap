import React from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const SimpleMap = () => {
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
    />
  );
};

export default SimpleMap;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
