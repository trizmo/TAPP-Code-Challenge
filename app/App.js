import React from 'react';
import { StyleSheet } from 'react-native';

// NAVIGATION
import NavigationContainer from './navigation/NavigationContainer.js'

export default class App extends React.Component {
  render() {
    return (
        <NavigationContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
