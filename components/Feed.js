import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Alert,
  Image
} from "react-native";
import FeedItem from "./FeedItem";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    //example binding function
    this._onPressButton = this._onPressButton.bind(this);
  }
  _myTestFunc() {
    console.log("testing custom function call");
  }
  _onPressButton() {
    Alert.alert("You tapped the button!");
    this._myTestFunc();
  }
  render() {
    return (
      <View style={styles.feed}>
        <FlatList
          data={[
            {
              key: "Feed Item A",
              rating: "5",
              img: "https://pbs.twimg.com/media/DZEwH5qXUAAdqZF.jpg"
            },
            {
              key: "Feed Item B",
              rating: "5",
              img: "https://pbs.twimg.com/media/DZEwH5qXUAAdqZF.jpg"

            }
          ]}
          renderItem={({ item }) => 
          <FeedItem item={item} />
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  feed: {
    flex: 3,
    backgroundColor: "yellow",
  },

});
