import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Watch extends React.Component {
    static navigationOptions = {
        title: 'Watch Live'
    };

    handlePress(){
        console.log('change color and link')
    };
    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.section}>
                        <Button style={{}} onPress={this.handlePress} color="pink" title="Watch Now"/>
                        <Text>Watch Now</Text>
                        <Text>Click here</Text>
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