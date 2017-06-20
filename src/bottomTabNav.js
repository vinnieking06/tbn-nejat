import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation } from "react-navigation";
import About from './about/About';
import Youtube from './Youtube';
import Contact from './Contact';
import Watch from './Watch';
import Donate from './Donate';

 const Tabs = TabNavigator({
  About: {
    screen: About,
  },
  Donate: {
    screen: Donate,
  },
  Watch: {
    screen: Watch
  },
  Youtube: {
    screen: Youtube,
  },
    Contact: {
    screen: Contact,
  }
  }, {
    tabBarOptions: {
      style: {
        backgroundColor: '#000080'
      }
    },
    initialRouteName: 'Watch'
  });

export default Tabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

