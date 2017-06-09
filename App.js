import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation } from "react-navigation";
import Tabs from './components/bottomTabNav.js';


export default class App extends React.Component {
  render() {
    return (<Tabs/>);
  }
}