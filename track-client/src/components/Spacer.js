import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Spacer = ({ children }) => {
  return <View style={styles.spacer}>{children}</View>;
};

export const HorCen = ({ children }) => {
  return <View style={styles.horCen}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15
  },
  horCen: {
    alignItems: 'center'
  }
});
