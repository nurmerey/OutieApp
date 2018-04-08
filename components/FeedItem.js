import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

export default class FeedItem extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    console.warn("my img", this.props.item.img);
    return (
        <View style={styles.container}>
          {/* <Text style={styles.info}>{this.props.item.key} - {this.props.item.rating}</Text> */}
          <Image style={{width:150, height:150}} source=
          {{uri:this.props.item.img}}

          />

        </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
        flex:1,
        backgroundColor:'red',        
      },
  info: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  image:{
    width: 100,
    height: 100,

  } 
}); 
