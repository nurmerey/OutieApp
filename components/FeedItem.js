import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class FeedItem extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>{this.props.item.key} - {this.props.item.rating}</Text>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
        flex:1,
        backgroundColor:'red'
      }
});
