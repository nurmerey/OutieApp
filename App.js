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

import Weather from './components/Weather';
import Feed from './components/Feed';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    //example binding function
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topNav}>
          <Text style={styles.dateText}>Thursday, 14th March</Text>
          <Text style={styles.welcome}>Welcome Rey!</Text>
        </View>
        <Weather />
       <Feed />
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
 
});
