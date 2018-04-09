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
        <View style={styles.rating}>
          <Image
            style={styles.ratingSmiley}
            source={require("../assets/icons/love_smiley.png")}
          />
          <Image
            style={styles.ratingWeather}
            source={require("../assets/icons/cloud.gif")}
          />
          <Text style={styles.weatherText}>{this.props.item.weatherTemp}˚</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 50,
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
  },
  rating: {
    position: "absolute",
    top: -35,
    right: 10
  },
  ratingSmiley: {
    width: 80,
    height: 80
  },
  ratingWeather: {
    width: 40,
    height: 40,
    marginLeft: -15,
    marginTop: -50,
    opacity: 0.5
  },
  weatherText: {
    width: 40,
    height: 40,
    marginLeft: -30,
    marginTop: -23,
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  }
});
