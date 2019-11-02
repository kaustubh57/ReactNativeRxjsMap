import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps';


const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class PolygonMap extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      coordinates: [
        {
          longitude: -122.442753,
          latitude: 37.79879,
        },
        {
          longitude: -122.424728,
          latitude: 37.801232,
        },
        {
          longitude: -122.422497,
          latitude: 37.790651,
        },
        {
          longitude: -122.440693,
          latitude: 37.788209,
        },
      ],
      center: {
        longitude: -122.4326648935676,
        latitude: 37.79418561114521,
      },
    };
  }

  render() {
    const {coordinates, center, region}: any = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={region}
        >
          <View>
            <Polygon
              coordinates={coordinates}
              strokeColor="rgba(0, 0, 0, 1)"
              strokeWidth={3}
            />
            <Polyline coordinates={[coordinates[0], coordinates[2]]}/>
            <Polyline coordinates={[coordinates[1], coordinates[3]]}/>
            <Marker coordinate={center}
                    title={'Center Point'}
                    description={'Description about the place'}
            />
          </View>
        </MapView>
      </View>
    );
  }
}

export default PolygonMap;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
