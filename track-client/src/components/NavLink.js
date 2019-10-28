import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { HorCen } from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({ text, buttonText, routeName, navigation }) => {
  return (
    <HorCen>
      <Text>{text}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.link}>{buttonText}</Text>
      </TouchableOpacity>
    </HorCen>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#4284FF'
  }
});

export default withNavigation(NavLink);
