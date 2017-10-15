import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";

export default class Founder extends React.Component {
  static navigationOptions = {
    title: 'Founder Info',
  };

  componentWillUnmount(){
   this.props.navigation.state.params.onClose()
  }

  render() {
    return (
    <View style={styles.container}>
      <Image 
        style={styles.backdrop} 
        source={{uri: 'https://www.rezasafa.com//assets/img/founder-reza-safa.jpg'}}>
          <View style={styles.backdropView}>
            <Text style={{color: 'white'}}>
              
            </Text>
          </View>
      </Image>
    </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  backdrop: {
  },
  backdropView: {
    width:'100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white'
  }
});