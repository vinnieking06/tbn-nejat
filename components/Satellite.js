import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon, ScrollView, FlatList } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import Data from './../assets/satelliteData';

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
        <View>
            <Text>top image</Text>
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
   paddingTop: 22
  },
  item: {
    padding: 10,
    height: 44,
  },
  property: {
    width: '25%'
  }
})