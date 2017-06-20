import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Donate extends React.Component {
    static navigationOptions = {
      tabBarIcon: () => (<Icon name="heart" size={30} color="white" />)
    };
  render() {
    return (
      <WebView
        source={{uri:'https://rezasafa.com/donate_mobile/'}}
      />
    );
  }
}