import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation } from "react-navigation";

 class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome to Nejat's App!</Text>
        <Button
          onPress={() => navigate('Broadcaster')}
          title="Broadcaster"
        />
        <Button
          onPress={() => navigate('Schedule')}
          title="Schedule"
        />
        <Button
          onPress={() => navigate('Testimonies')}
          title="Testimonies"
        />
        <Button
          onPress={() => navigate('Satellite')}
          title="Satellite Coverage"
        />
        <Button
          onPress={() => navigate('Founder')}
          title="Founder Info"
        />
      </View>
    );
  }
}

class Broadcaster extends React.Component {
  static navigationOptions = {
    title: 'BroadCaster',
  };
  render() {
    return (
      <View>
        <Text>Something about Broadcasting</Text>
      </View>
    );
  }
}

class Schedule extends React.Component {
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

class Testimonies extends React.Component {
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

class Satellite extends React.Component {
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

class Founder extends React.Component {
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




const About = StackNavigator({
  Home: { screen: HomeScreen },
  Broadcaster: { screen: Broadcaster },
  Schedule: {screen: Schedule},
  Testimonies: {screen: Testimonies},
  Satellite: {screen: Satellite},
  Founder: {screen: Founder}
});

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})