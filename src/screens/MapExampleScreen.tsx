import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import CustomAnimatedMarkersAndRegionExample from '../components/CustomAnimatedMarkersAndRegionExample';

class MapExampleScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomAnimatedMarkersAndRegionExample/>
      </View>
    );
  }
}

export default MapExampleScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  }
});
