import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Alert } from "react-native";
import { connect } from "react-redux";
import { addSelfie } from "../redux/selfieActions";

import TopNav from "../components/TopNav";

type Props = {};
class SettingsScreen extends Component<Props> {
  constructor(props) {
    super(props);
    //example binding function
  }

  onButtonPress = () => {
    console.warn("HI");
    this.props.addSelfie({ uri: "http://whatever" });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Settings page</Text>
        <Button title="Click" onPress={this.onButtonPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default connect(null, { addSelfie })(SettingsScreen);
