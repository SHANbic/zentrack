import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Sign Out" onPress={signOut} />
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
