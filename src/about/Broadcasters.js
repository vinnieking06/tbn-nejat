import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator, navigation } from "react-navigation";
import Data from './../../assets/BroadcastData';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Program, OpenProgram} from './sharedComponents';

export class BroadcasterContainer extends React.Component {
  static navigationOptions = {
    title: 'Broadcasters',
  };

  constructor(props) {
    super(props);
    this.state = {programs: []};
    this.toggleProgram = this.toggleProgram.bind(this);
  };

  toggleProgram(index){
    let newState = this.state.programs;
    newState.forEach((item)=>{
      if (item.index === index) {
        item.open = !item.open
      } else {
        item.open = false;
      }
    });
    this.setState({programs: newState})
  }

  componentDidMount(){
    Data.forEach((item, index) => {
      item.open = false;
      item.index = index;
    });
    this.setState({programs: Data})
  }
  
  render() {
    return (
      <ScrollView ContentContainerStyle={styles.container}>
        {this.state.programs.map((program, index)=>{
          return < Program OpenProgramInfo={<OpenProgramInfo program={program} />} navdestination={"BroadcasterInfo"} navInfo={program.info} imageUrl={"https://www.rezasafa.com//assets/img/founder-reza-safa.jpg"} programInfo={<ProgramInfo program={program} />} navigation={this.props.navigation} toggleProgram={this.toggleProgram} open={program.open} key={index} program={program} />
        })}
      </ScrollView>
    );
  }
}

const ProgramInfo = (props) => {
  return (
    <View style={{flex:1, flexDirection: 'column'}}>
        <Text>{props.program.program}</Text>
        <Text>{props.program.ministry}</Text>
    </View>
  )
}

export const OpenProgramInfo = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.program.ministry}</Text>
      <Text style={styles.text}>{props.program.days}</Text>
      <Text style={styles.text}>{props.program.time}</Text>
    </View>
  )
}

export const BroadcasterInfo = (props) => {
 const info = props.navigation.state.params.info;
  return (
    <View>
      <Text>{info}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    color:'white'
  }
})