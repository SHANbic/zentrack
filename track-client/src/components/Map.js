import React from 'react';
import { Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 24 + i * 0.01,
      longitude: 24 + i * 0.01
    });
  }
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 24,
        longitude: 24,
        latitudeDelta: 10,
        longitudeDelta:10
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
