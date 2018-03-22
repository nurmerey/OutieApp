/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

import Weather from './components/Weather'

type Props = {};
export default class App extends Component<Props> {
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
      <View style={styles.container}>
        <View style={styles.topNav}>
          <Text style={styles.dateText}>Thursday, 14th March</Text>
          <Text style={styles.welcome}>Welcome Rey!</Text>
        </View>
        <Weather />
        <View style={styles.feed}>
          <Button
            onPress={this._onPressButton}
            title="Add your first selfie"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  topNav: {
    flex: 0.5,
    flexDirection:"column",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    paddingTop:30
  },
  welcome: {
    fontSize: 15,
    textAlign: 'left',
    margin: 10
  },
  feed:{
    flex:3,
    backgroundColor:'yellow'
  }
});
