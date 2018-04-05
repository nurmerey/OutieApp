import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native";

import Weather from "../components/Weather";
import Feed from "../components/Feed";
import TopNav from "../components/TopNav";

type Props = {};
export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    //example binding function
  }

  render() {
    return (
      <View style={styles.container}>
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
