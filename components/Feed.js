import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
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
        <View style={styles.feed}>
          <Button
            onPress={this._onPressButton}
            title="Add your first selfie"
          />
        </View>
    );
  }
}
const styles = StyleSheet.create({
    feed:{
        flex:3,
        backgroundColor:'yellow'
      }
});