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
          return < Program  OpenProgramInfo={<OpenProgramInfo program={program} />} navdestination={"TestimonyInfo"} navInfo={{testimony: program.testimony, name: program.name, country: program.country}} imageUrl={"https://www.rezasafa.com//assets/img/founder-reza-safa.jpg"} programInfo={<ProgramInfo program={program} />} navigation={this.props.navigation} toggleProgram={this.toggleProgram} open={program.open} key={index} program={program} />
        })}
      </ScrollView>
    );
  }
}

const ProgramInfo = (props) => {

  return (
    <View style={{flex:1, flexDirection: 'column'}}>
      <Text>{props.program.name}</Text>
      <Text>{props.program.country}</Text>
    </View>
  )
}

class OpenProgramInfo extends React.Component {
  shorten(input){
    let newInput = input.split(" ");
    if (newInput.length > 9) {
      newInput = newInput.slice(0,8);
      newInput.push("...");
      newInput = newInput.join(" ")
      return newInput;
    }
    return input;

}
  render(){
    const newTest = this.shorten(this.props.program.testimony);
    return (
      <View>
        <Text style={styles.text}>{this.props.program.name}</Text>
        <Text style={styles.text}>{newTest}</Text>
      </View>
    )
  }
}

export class TestimonyInfo extends React.Component {
  static navigationOptions = {
   title: 'Testimonies'
  };
  render(){
    const props = this.props.navigation.state.params.info
    return (
      <View style={{flex:1}}>
        <TopImage program={props} />
        <Text>{props.testimony}</Text>
        </View>
    )
  }
}

const TopImage = (props) => {
    return (
      <View style={{height:250}}>
        <Image style={{flex:1}} source={{uri: 'https://www.rezasafa.com//assets/img/founder-reza-safa.jpg'}}>
            <View style={styles.backdropView}>
              <Text style={{color: 'white'}}>{props.program.name}</Text>
              <Text style={{color: 'white'}}>{props.program.country}</Text>
            </View>
        </Image>
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
  },  
  backdropView: {
    width:'100%',
    height: "100%",
    backgroundColor: 'rgba(0,0,0,0)',
  },
})