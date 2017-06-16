import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, Icon, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import Data from './../assets/BroadcastData';


export class BroadcasterContainer extends React.Component {
  static navigationOptions = {
    title: 'Broadcasters'
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
          return < Program navigation={this.props.navigation} toggleProgram={this.toggleProgram} open={program.open} key={index} program={program} />
        })}
      </ScrollView>
    );
  }
}

class Program extends React.Component {
  open(open, program){
    if (open) {
      return <OpenProgram navigation={this.props.navigation} program={program} />
    }
    else {
      return null
    } 
  }
  render(){
    const props = this.props;
      return (
        <View style={styles.program} >
          <View >
          <TouchableOpacity onPress={()=>{props.toggleProgram(props.program.index)}}>
            <Text>{props.program.program}</Text>
            <Text>{props.program.ministry}</Text>
          </TouchableOpacity>
          </View>
          {this.open(props.program.open, props.program)}
        </View>
      )

  }

}

class OpenProgram extends React.Component {
  render(){
    const props = this.props
    return (
        <View style={{flex:1, flexDirection: 'column'}}>
          <Text>{props.program.ministry}</Text>
          <Text>{props.program.days}</Text>
          <Text>{props.program.time}</Text>
          <Button title="More info" onPress={()=>{props.navigation.navigate('BroadcasterInfo', {info: props.program.info})}} />
        </View>
      )
  }
  
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
    
  }
})