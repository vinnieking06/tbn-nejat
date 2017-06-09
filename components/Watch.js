import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';

class Watch extends React.Component {
    
    handlePress(){
        console.log('change color and link')
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <View style={styles.section}>
                        <Button onPress={this.handlePress} title="Watch"/>
                        <Text>High Speed</Text>
                    </View>
                    <View style={styles.section}>
                        <Button onPress={this.handlePress} title="Watch"/>
                        <Text>Low Speed</Text>
                    </View>
                </View>

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
  },
  buttons: {
      flexDirection: 'row'
  },
  section: {
    flexDirection: 'column',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Watch;