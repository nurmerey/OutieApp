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
  View
} from 'react-native';

export default class Weather extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
        <View style={styles.weather}>
            <Text style={styles.weatherTemp}>76</Text>
            <View style={styles.weatherChart}>
            <Text style={styles.weatherChartText}>weather chart goes here</Text>
            </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({

  weather: {
    flex: 3,
    backgroundColor: 'purple',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingTop:50
  },
  weatherTemp:{
    flex:3,
    fontSize:100,
    justifyContent: 'center',
    alignItems:'center'
  },
  weatherChart:{
    flex:1,
    width:'100%',
    backgroundColor:'blue',
    justifyContent: 'center',
    alignItems:'center'
  },
  weatherChartText:{

  }
});

