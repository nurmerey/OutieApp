import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default class TopNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.topNav}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigate("Camera")}>
            <Image
              style={{ width: 30, height: 25 }}
              source={require("../assets/icons/camera.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.middle}>
          <Text style={styles.dateText}>Saturday, 14th of April</Text>
          <Text style={styles.welcome}>Welcome Sunshine!</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={() => navigate("Settings")}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../assets/icons/settings.png")}
            />
          </TouchableOpacity>
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
    textAlign: "center",
    margin: 10,
    marginTop: 5
  },
  dateText: {
    textAlign: "center"
  }
});
