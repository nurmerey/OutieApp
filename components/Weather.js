/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";

import Chart from "./Chart";

export default class Weather extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.weather}>
        <View style={styles.weatherBox}>
          <View style={styles.weatherBoxLeft}>
            <Image
              style={{ width: 90, height: 90 }}
              source={require("../assets/icons/raincloud.png")}
            />
          </View>
          <View style={styles.weatherBoxRight}>
            <Text style={styles.weatherTemp}>50° </Text>
            <Text style={styles.dailyHighLow}>H 51° | L 42°</Text>
          </View>
        </View>

        {/*<View style={styles.weatherChart}>
          <Text style={styles.weatherChartText}>weather chart goes here</Text>
    </View>*/}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  weather: {
    flex: 1,
    backgroundColor: "white",
    // alignItems:'center',
    justifyContent: "space-between",
    paddingTop: 50
  },
  weatherBox: {
    flex: 2,
    flexDirection: "row"
  },
  weatherBoxLeft: {
    flex: 1,
    alignItems: "flex-end"
  },
  weatherBoxRight: {
    flex: 1,
    paddingLeft: 10
  },
  weatherTemp: {
    fontSize: 55,
    marginBottom: -5
  },
  weatherHighLow: {
    fontSize: 22
  },
  weatherChart: {
    flex: 1,
    width: "100%",
    backgroundColor: "#c3dde2",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 1
  },
  weatherChartText: {}
});
