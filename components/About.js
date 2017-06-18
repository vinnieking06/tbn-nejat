import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import { Schedule, Founder, Satellite} from './aboutSubNavs.js'; 
import {BroadcasterContainer, BroadcasterInfo} from './Broadcasters';
import {TestimoniesContainer, TestimonyInfo} from './Testimonies';

 class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
        <TouchableOpacity onPress={() => navigate('Broadcaster')}>
          <View style={styles.button}>
            <Text style={styles.text}>Broadcasters</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Schedule')}>
          <View style={styles.button}>
            <Text style={styles.text}>Schedule</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Testimonies')}>
          <View style={styles.button}>
            <Text style={styles.text}>Testimonies</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Founder')}>
          <View style={styles.button}>
            <Text style={styles.text}>Founder Info</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Satellite')}>
          <View style={styles.button}>
            <Text style={styles.text}>Satellite</Text>
            </View>
          </TouchableOpacity>

      </View>
    );
  }
}

const About = StackNavigator({
  Home: { screen: HomeScreen},
  Broadcaster: { screen: BroadcasterContainer },
  Schedule: {screen: Schedule},
  Testimonies: {screen: TestimoniesContainer},
  Satellite: {screen: Satellite},
  Founder: {screen: Founder},
  BroadcasterInfo: {screen: BroadcasterInfo},
  TestimonyInfo: {screen: TestimonyInfo}
},{headerMode: 'screen', navigationOptions: {
    headerTintColor: 'black', headerBackTitle: null, headerStyle: {backgroundColor: null, borderBottomWidth: 0}
}});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  
  },
  button: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 112,
    backgroundColor: 'white'
    
  },
  text: {
    marginLeft: 10
  }
})

export default About;

