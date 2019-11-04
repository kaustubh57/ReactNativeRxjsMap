import React from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
// @ts-ignore
import MapView, { Animated, AnimatedRegion, ProviderPropType, } from 'react-native-maps';


const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE: number = 45.52220671242907;
const LONGITUDE: number = -122.6653281029795;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class AnimatedMarkersMap extends React.Component {
  private marker: any;

  constructor(props: any) {
    super(props);

    this.state = {
      coordinate: new AnimatedRegion({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068,
      }),
    };
  }

  animate() {
    const {coordinate}: any = this.state;
    const newCoordinate = {
      latitude: LATITUDE + (Math.random() - 0.5) * (LATITUDE_DELTA / 2),
      longitude: LONGITUDE + (Math.random() - 0.5) * (LONGITUDE_DELTA / 2),
    };

    if (Platform.OS === 'android') {
      if (this.marker) {
        this.marker._component.animateMarkerToCoordinate(newCoordinate, 500);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  }

  render() {
    const {coordinate}: any = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        >
          <Animated
            ref={(marker: any) => {
              this.marker = marker;
            }}
            coordinate={coordinate}
          />
        </MapView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.animate()}
            style={[styles.bubble, styles.button]}
          >
            <Text>Animate</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// @ts-ignore
AnimatedMarkersMap.propTypes = {
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
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});

export default AnimatedMarkersMap;
