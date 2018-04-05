import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native";

import TopNav from "../components/TopNav";

type Props = {};
export default class SettingsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    //example binding function
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings page</Text>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
    header: (
        <TopNav />
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
