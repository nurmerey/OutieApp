import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Chart extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
        <View style={styles.weatherChart}>
            <Text style={styles.weatherChartText}>weather chart goes here</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  weatherChart:{

  },
  weatherChartText:{

  }
});

