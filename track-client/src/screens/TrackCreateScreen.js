import '../_mockLocation';
import React, { useContext, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({ isFocused }) => {
  const { state, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    location => {
      addLocation(location, state.recording);
    },
    [state.recording]
  );

  const [err] = useLocation(isFocused, callback);

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={{ fontSize: 48 }}>
      <Text h2>Create a track</Text>
      <Map />
      {err ? <Text>You must accept geo location</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
