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

import { connect } from "react-redux";

class Feed extends Component {
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
              timestamp: 1523226512,
              rating: "5",
              weatherTemp: 20,
              img: "https://tinyurl.com/y9asfh7d"
            },
            {
              key: "Feed Item B",
              timestamp: 1523226545,
              rating: "5",
              weatherTemp: 40,
              img: "https://tinyurl.com/y9asfh7d"
            }
          ]}
          renderItem={({ item }) => <FeedItem item={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  feed: {
    flex: 3
  }
});

const mapStateToProps = state => {
  return { selfies: state };
};

export default connect(mapStateToProps, {})(Feed);
