import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";

export default class Schedule extends React.Component {
  static navigationOptions = {
    title: 'Schedule',
  };
  render() {
    return (
      <View>
        <Text>Something about Scheduling</Text>
      </View>
    );
  }
}
