import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import {Broadcaster, Schedule, Testimonies, Founder, Satellite} from './aboutSubNavs.js'; 


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
            <Text>Broadcasters</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Schedule')}>
          <View style={styles.button}>
            <Text>Schedule</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Testimonies')}>
          <View style={styles.button}>
            <Text>Testimonies</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Founder')}>
          <View style={styles.button}>
            <Text>Founder Info</Text>
            </View>
          </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Satellite')}>
          <View style={styles.button}>
            <Text>Satellite</Text>
            </View>
          </TouchableOpacity>

      </View>
    );
  }
}


const About = StackNavigator({
  Home: { screen: HomeScreen},
  Broadcaster: { screen: Broadcaster },
  Schedule: {screen: Schedule},
  Testimonies: {screen: Testimonies},
  Satellite: {screen: Satellite},
  Founder: {screen: Founder}
},{headerMode: 'screen', navigationOptions: {
headerTintColor: 'black', headerBackTitle: null, headerStyle: {backgroundColor: null, borderBottomWidth: 0}
}});

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 91
  }
})