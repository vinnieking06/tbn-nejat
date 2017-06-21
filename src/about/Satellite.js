import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon, ScrollView, FlatList } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import Data from './../../assets/satelliteData';

export default class SatelliteContainer extends React.Component {
  static navigationOptions = {
    title: 'Satellite',
  };
  constructor(props) {
    super(props);
    this.state = {countries: []}
  };
  componentDidMount() {
    this.setState({countries: Data});
  }
  render() {
    return (
      <View style={{flex:1}}>
        <TopImage/>
        <List data={this.state.countries} />
      </View>
    );
  }
}

const TopImage = () => {
    return (
      <View style={styles.container}>
        <Image style={{flex:1}} source={{uri: 'https://www.rezasafa.com//assets/img/founder-reza-safa.jpg'}}>
            <View style={styles.backdropView}>
              <Text style={{color: 'white'}}>Where we Broadcast</Text>
              <Text style={{color: 'white'}}>Reaching 83 Million Muslims</Text>
            </View>
        </Image>
      </View>
    )
}

class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={{flexDirection: 'row', borderWidth: 0.5,
    borderColor: '#d6d7da',}}>
            <Text style={styles.property}>Country</Text>
            <Text style={styles.property}>Potential Audience</Text>
            <Text style={styles.property}>Churches</Text>
            <Text style={styles.property}>Persecution</Text>
          </View>
        <FlatList
          data={this.props.data}
          renderItem={({item}) => 
          <View style={{flexDirection: 'row', borderWidth: 0.5,
    borderColor: '#d6d7da',}}>
            <Text style={styles.property}>{item.key}</Text>
            <Text style={styles.property}>{item.audience}</Text>
            <Text style={styles.property}>{item.churches}</Text>
            <Text style={styles.property}>{item.persecution}</Text>
          </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  item: {
    padding: 10,
    height: 44,
  },
  property: {
    width: '25%',
    fontSize: 10
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
})