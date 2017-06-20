import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Donate extends React.Component {
  render() {
    return (
      <WebView
        source={{uri:'https://rezasafa.com/donate_mobile/'}}
      />
    );
  }
}