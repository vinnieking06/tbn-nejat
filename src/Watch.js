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
                 <TouchableOpacity style={styles.button}>
                   <View>
                        <Text style={styles.textBig}>Watch Now</Text>
                        <Text style={styles.textSmall}>Click here</Text>
                    </View>
                    <Icon style={styles.icon} name="arrow-circle-right" size={15} color='white' />
                </TouchableOpacity> 
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
  section: {
    flexDirection: 'column',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 150,
    height: 50
    },
  textBig: {
        color: 'white',
        marginBottom: 3
    },
  textSmall: {
        color: 'green',
        fontSize: 12
    },
  icon: {
        marginLeft: 15
    }
})

export default Watch;