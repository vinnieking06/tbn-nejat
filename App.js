import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation } from "react-navigation";
import About from './About';

export default class App extends React.Component {
  render() {
    return (<Tabs/>);
  }
}

class Donate extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://rezasafa.com/donate/'}}
        style={styles.donate} 
      />
    );
  }
}

const Watch = () => {
  return(
    <View style={styles.container}>
      <Text>on new branch</Text>

      </View>
  )
}


class Youtube extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Youtube',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./youtube.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  render() {
    return (
        <WebView
        style={{flex:1}}
        javaScriptEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/ZZ5LpwO-An4?rel=0&autoplay=0&showinfo=0&controls=0'}}
        />
    );
  }
}


const Contact = () => {
  return(
    <View style={styles.container}>
      <Text>contact us here</Text>

      </View>
  )
}

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
  Contact: {
    screen: Contact,
  },
  Youtube: {
    screen: Youtube,
  }
  }, {
    tabBarOptions: {
      style: {
        backgroundColor: 'white'
      }
    }
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stripe: {
    backgroundColor: 'powderblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  donate: {
    marginTop: 20,

  },
    icon: {
    flex: 1,
    width: 30
  }
})

