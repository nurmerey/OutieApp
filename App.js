/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native";

import Weather from "./components/Weather";
import Feed from "./components/Feed";
import TopNav from "./components/TopNav";

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    //example binding function
  }

  render() {
    return (
      <View style={styles.container}>
        <TopNav />
        <Weather />
        <Feed />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
