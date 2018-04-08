/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import LoginView from './LoginView';
import MyView from './view/MyView'
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
let {width, height} = Dimensions.get('window');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <MyView/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:width,
    height:height,
    flex:0,
    backgroundColor: '#00ff00',
    alignItems: 'center',
  },
});
