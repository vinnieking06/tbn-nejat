import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation } from "react-navigation";
import About from './about/aboutNavigation';
import Youtube from './Youtube';
import Contact from './Contact';
import Watch from './Watch';
import Donate from './Donate';
import Icon from 'react-native-vector-icons/FontAwesome';

 const Tabs = TabNavigator({
  About: {
    screen: About, navigationOptions: {tabBarLabel: 'About Us',tabBarIcon: () => (<Icon name="info-circle" size={30} color="white" />)}
  },
  Donate: {
    screen: Donate, navigationOptions: { title: 'Donate', tabBarIcon: () => (<Icon name="heart" size={30} color="white" />)}
  },
  Watch: {
    screen: Watch, navigationOptions: { tabBarIcon: () => (<Icon name="youtube-play" size={30} color="white" />)}
  },
  Youtube: {
    screen: Youtube, navigationOptions: { tabBarIcon: () => (<Icon name="youtube" size={30} color="white" />)}
  },
  Contact: {
    screen: Contact, navigationOptions: { tabBarIcon: () => (<Icon name="phone" size={30} color="white" />)}
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

