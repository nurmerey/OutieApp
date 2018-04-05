import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
export default class TopNav extends Component {
  render() {
    return (
      <View style={styles.topNav}>
        <Text style={styles.dateText}>Thursday, 14th March</Text>
        <Text style={styles.welcome}>Welcome Rey!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 30
  },
  welcome: {
    fontSize: 20,
    textAlign: "left",
    margin: 10,
    marginTop: 5
  }
});
