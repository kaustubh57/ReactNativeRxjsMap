import React, { Component } from 'react';
import { StyleSheet, View, YellowBox } from 'react-native';
import SimpleMap from '../components/SimpleMap';
import MarkerMap from '../components/MarkerMap';
import PolylineMap from '../components/PolylineMap';
import GeojsonMap from '../components/GeojsonMap';
import CircleMap from '../components/CircleMap';
import PolygonMap from '../components/PolygonMap';
import CalloutMap from '../components/CalloutMap';
import Callout2Map from '../components/Callout2Map';
import OverlayMap from '../components/OverlayMap';
import EventListener from '../components/EventListener';

class MapScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CircleMap />
      </View>
    );
  }
}

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});
