import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Alert
} from 'react-native';

export default class Feed extends Component {
  constructor(props) {
    super(props)
    //example binding function
    this._onPressButton = this._onPressButton.bind(this)
  }
  _myTestFunc() {
    console.log('testing custom function call')
  }
  _onPressButton() {
    Alert.alert('You tapped the button!')
    this._myTestFunc()
  }
  render() {
    return (
        <FlatList style={styles.feed}
            data={[
                {
                    key: 'a',
                    rating: "5"
                }, 
                {
                    key: 'b',
                    rating: "5"
                }
            ]}
            renderItem={({item}) => <Text>{item.key}, {item.rating}</Text>}
        />
    );
  }
}
const styles = StyleSheet.create({
    feed:{
        flex:3,
        backgroundColor:'yellow'
      }
});