import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableOpacity,
  Image
} from "react-native";

import { RNCamera } from "react-native-camera";

import TopNav from "../components/TopNav";

import { connect } from "react-redux";
import { addSelfie } from "../redux/selfieActions";

type Props = {};
placeholderImg = "../assets/icons/love_smiley.png";
class CameraScreen extends Component<Props> {
  constructor(props) {
    super(props);
    //example binding function
    this.state = { placeholderImg: placeholderImg };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.myImg}>{this.state.placeholderImg}</Text>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({ placeholderImg: data.uri });
      this.props.addSelfie({ uri: data.uri });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  },
  myImg: {
    color: "white"
  }
});

export default connect(null, { addSelfie })(CameraScreen);
