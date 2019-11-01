import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 48.6095004 + i * 0.5,
      longitude: 2.4782058 + i * -0.8
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 48.6095004,
        longitude: 2.4782058,
        latitudeDelta: 1,
        longitudeDelta:1
      }}
    >
      <Polyline coordinates={points} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
