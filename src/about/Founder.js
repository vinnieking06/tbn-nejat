import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";

export default class Founder extends React.Component {
  static navigationOptions = {
    title: 'Founder Info',
  };
  render() {
    return (
      <View>
        <Text>Something about Founder</Text>
      </View>
    );
  }
}