import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome.js';

export default class Contact extends React.Component {
   render(){
       return(
        <View style={styles.container}>
            <Text>(714) 880-8670</Text>
            <Text>www.nejattv.org</Text>
            <Text>amen@nejattv.org</Text>
            <Text>social media icons</Text>
          </View>
      )
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})