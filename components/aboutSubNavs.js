import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";

export class Broadcaster extends React.Component {
  static navigationOptions = {
    title: 'Broadcasters'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Something about Broadcasting</Text>
      </View>
    );
  }
}

export class Schedule extends React.Component {
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

export class Testimonies extends React.Component {
  static navigationOptions = {
    title: 'Testimonies',
  };
  render() {
    return (
      <View>
        <Text>Something about Testimonies</Text>
      </View>
    );
  }
}

export class Satellite extends React.Component {
  static navigationOptions = {
    title: 'Satellite Coverage',
  };
  render() {
    return (
      <View>
        <Text>Something about Satellite</Text>
      </View>
    );
  }
}

export class Founder extends React.Component {
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
