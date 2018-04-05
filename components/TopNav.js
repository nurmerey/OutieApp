import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

export default class TopNav extends Component {
  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.topNav}>
        <View style={styles.left}>
          <Image 
            style={{ width: 30, height: 25 }}
            source={require("../assets/icons/camera.png")} />
        </View>
        <View style={styles.middle}>
          <Text style={styles.dateText}>Thursday, 14th March</Text>
          <Text style={styles.welcome}>Welcome Rey!</Text>
        </View>
        <View style={styles.right}>
          <Image 
              style={{ width: 30, height: 30 }}
              source={require("../assets/icons/settings.png")} />

           <Button title="Click" onPress={() => navigate('Camera')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingTop: 30
  },
  left: {
    padding: 10
  },
  right: {
    padding: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: "left",
    margin: 10,
    marginTop: 5
  }
});
