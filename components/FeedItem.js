import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button, Image } from "react-native";

export default class FeedItem extends Component<Props> {
  constructor(props) {
    super(props);
  }

  render() {
    const date = new Date(this.props.item.timestamp);
    const options = { weekday: "long", month: "long", day: "numeric" };
    const formattedDateText = date.toLocaleDateString("en-US", options);
    return (
      <View style={styles.container}>
        <Text style={styles.infoText}>{formattedDateText}</Text>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={{ uri: this.props.item.img }} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginBottom: 15,
    borderColor: "#D3D3D3",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 5
  },
  infoText: {
    fontSize: 20,
    height: 50,
    marginBottom: 10,
    padding: 20
  },
  image: {
    width: "100%",
    height: 350
  },
  imgContainer: {
    overflow: "hidden",
    backgroundColor: "red",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  }
});
