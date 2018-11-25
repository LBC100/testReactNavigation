import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { BottomTab } from './app/config/router'

class App extends Component {
  render() {
    return (
      <BottomTab />
    );
  }
}

export default App;
