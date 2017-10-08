import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation } from "react-navigation";
import About from './about/aboutNavigation';
import Youtube from './Youtube';
import Contact from './Contact';
import Watch from './Watch';
import Donate from './Donate';
import Icon from 'react-native-vector-icons/FontAwesome.js';

 const Tabs = TabNavigator({
  About: {
    screen: About, navigationOptions: { tabBarLabel: 'About Us',tabBarIcon: ({ tintColor }) => (<Icon name="info-circle" size={30} color={tintColor}  />)}
  },
  Donate: {
    screen: Donate, navigationOptions: { title: 'Donate', tabBarIcon: ({ tintColor }) => (<Icon name="heart" size={30} color={tintColor}   />)}
  },
  Watch: {
    screen: Watch, navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="youtube-play" size={30} color={tintColor}   />)}
  },
  Youtube: {
    screen: Youtube, navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="youtube" size={30} color={tintColor}  />)}
  },
  Contact: {
    screen: Contact, navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="phone" size={30} color={tintColor} />)}
  }
  }, {
    tabBarOptions: {
      style: {
        backgroundColor: 'rgb(43, 62, 84)'
      },
      showLabel: false,
      activeTintColor: 'rgb(255, 255, 255)',
      inactiveTintColor: 'rgba(132, 140, 152, 1)'
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

