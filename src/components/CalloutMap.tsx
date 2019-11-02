import React, { Component } from 'react';
import { Alert, Dimensions, StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import MapView, { Callout, Marker, ProviderPropType } from 'react-native-maps';


const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class CalloutMap extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      poi: null,
    };

    this.onPoiClick = this.onPoiClick.bind(this);
  }

  onPoiClick(e: any) {
    Alert.alert('here...');
    const poi = e.nativeEvent;

    this.setState({
      poi,
    });
  }

  render() {
    const {poi, region}: any = this.state;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onPoiClick={this.onPoiClick}
        >
          {poi && (
            <Marker coordinate={poi.coordinate}>
              <Callout>
                <View>
                  <Text>Place Id: {poi.placeId}</Text>
                  <Text>Name: {poi.name}</Text>
                </View>
              </Callout>
            </Marker>
          )}
        </MapView>
      </View>
    );
  }
}

// @ts-ignore
CalloutMap.propTypes = {
  provider: ProviderPropType,
};

export default CalloutMap;

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
