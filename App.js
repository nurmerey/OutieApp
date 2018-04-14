import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import CameraScreen from "./screens/CameraScreen";
import SettingsScreen from "./screens/SettingsScreen";
import TopNav from "./components/TopNav";

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      header: props => <TopNav {...props} />
    })
  },
  Camera: { screen: CameraScreen },
  Settings: { screen: SettingsScreen }
});

export default App;
