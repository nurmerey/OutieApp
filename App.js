import React, { Component } from "react";
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import CameraScreen from './screens/CameraScreen';
import SettingsScreen from './screens/SettingsScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Camera: { screen: CameraScreen },
  Settings: { screen: SettingsScreen }
})


export default App