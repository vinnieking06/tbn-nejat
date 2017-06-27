import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import {BroadcasterContainer, BroadcasterInfo} from './Broadcasters';
import {TestimoniesContainer, TestimonyInfo} from './Testimonies';
import Satellite from './Satellite';
import Schedule from './Schedule';
import Founder from './Founder';
import HomeScreen from './About';
import Icon from 'react-native-vector-icons/FontAwesome';

const AboutRouter = StackNavigator({
  Home: { screen: HomeScreen},
  Broadcaster: { screen: BroadcasterContainer },
  Schedule: {screen: Schedule},
  Testimonies: {screen: TestimoniesContainer},
  Satellite: {screen: Satellite},
  Founder: {screen: Founder},
  BroadcasterInfo: {screen: BroadcasterInfo},
  TestimonyInfo: {screen: TestimonyInfo}
},{headerMode: 'screen', navigationOptions: {
    headerTintColor: 'black', headerBackTitle: null, headerStyle: { borderBottomWidth: 0}
}});

export default AboutRouter