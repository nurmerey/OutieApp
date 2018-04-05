import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native";

import TopNav from "../components/TopNav";

type Props = {};
export default class CameraScreen extends Component<Props> {
  constructor(props) {
    super(props);
    //example binding function
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Camera page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
