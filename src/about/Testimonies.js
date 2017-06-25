import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import Data from './../../assets/testimonyData';
import {Program, OpenProgram} from './sharedComponents';

export class TestimoniesContainer extends React.Component {
  static navigationOptions = {
    title: 'Testimonies'
  };

  constructor(props) {
    super(props);
    this.state = {testimonies: []};
    this.toggleProgram = this.toggleProgram.bind(this);
  };

  toggleProgram(index){
    let newState = this.state.testimonies;
    newState.forEach((item)=>{
      if (item.index === index) {
        item.open = !item.open
      } else {
        item.open = false;
      }
    });
    this.setState({testimonies: newState})
  }

  componentDidMount(){
    Data.forEach((item, index) => {
      item.open = false;
      item.index = index;
    });
    this.setState({testimonies: Data})
  }
  
  render() {
    return (
      <ScrollView ContentContainerStyle={styles.container}>
        {this.state.testimonies.map((program, index)=>{
          return < Program  OpenProgramInfo={<OpenProgramInfo program={program} />} navdestination={"TestimonyInfo"} navInfo={program.testimony} imageUrl={"https://www.rezasafa.com//assets/img/founder-reza-safa.jpg"} programInfo={<ProgramInfo program={program} />} navigation={this.props.navigation} toggleProgram={this.toggleProgram} open={program.open} key={index} program={program} />
        })}
      </ScrollView>
    );
  }
}

const ProgramInfo = (props) => {
  return (
        <View style={{flex:1, flexDirection: 'column'}}>
          <Text style={styles.text}>{props.program.name}</Text>
          <Text style={styles.text}>{props.program.country}</Text>
        </View>
  )
}

const OpenProgramInfo = (props) => {
  return (
    <View>
      <Text>{props.program.name}</Text>
      <Text>{props.program.country}</Text>
    </View>
  )
}

export const TestimonyInfo = (props) => {
 const testimony = props.navigation.state.params.info;
  return (
    <View>
      <Text>{testimony}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
   program: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 0.5
  },
  openProgram: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 100,
    borderWidth: 0.5
  },
  text: {
    color:'white'
  }
})