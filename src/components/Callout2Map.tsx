import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import MapView, { Callout, Marker, ProviderPropType } from 'react-native-maps';

// @ts-ignore
import flagImg from '../assets/flag-blue.png';


const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;
let id = 0;

class Callout2Map extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: []
    };

    this.onMapPress = this.onMapPress.bind(this);
  }

  onMapPress(e: any) {
    const {markers}: any = this.state;
    this.setState({
      markers: [
        ...markers,
        {
          coordinate: e.nativeEvent.coordinate,
          key: `foo${id++}`,
        },
      ],
    });
  }

  render() {
    const {region}: any = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onPress={this.onMapPress}
          loadingEnabled
          loadingIndicatorColor="#666666"
          loadingBackgroundColor="#eeeeee"
        >
          <Marker
            coordinate={{
              latitude: LATITUDE + SPACE,
              longitude: LONGITUDE + SPACE,
            }}
            centerOffset={{x: -18, y: -60}}
            anchor={{x: 0.69, y: 1}}
            image={flagImg}
          />
          <Marker
            coordinate={{
              latitude: LATITUDE - SPACE,
              longitude: LONGITUDE - SPACE,
            }}
            centerOffset={{x: -42, y: -60}}
            anchor={{x: 0.84, y: 1}}
          >
            <Callout>
              <View>
                <Text>This is a plain view</Text>
              </View>
            </Callout>
          </Marker>
        </MapView>
        <View style={styles.buttonContainer}>
          <View style={styles.bubble}>
            <Text>Map with Loading</Text>
          </View>
        </View>
      </View>
    );
  }
}

// @ts-ignore
Callout2Map.propTypes = {
  provider: ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'red',
  },
});

export default Callout2Map;
