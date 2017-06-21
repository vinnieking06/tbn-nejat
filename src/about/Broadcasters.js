import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import Data from './../../assets/BroadcastData';
import Icon from 'react-native-vector-icons/FontAwesome';


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
          return < Program navigation={this.props.navigation} toggleProgram={this.toggleProgram} open={program.open} key={index} program={program} />
        })}
      </ScrollView>
    );
  }
}

class Program extends React.Component {
  
  open(open, program){
    if (open) {
      return <OpenProgram toggleProgram={this.props.toggleProgram} navigation={this.props.navigation} program={program} />
    }
    else {
      return null
    } 
  }

  render(){
    const props = this.props;
      return (
        <View style={styles.itemContainer}>
          <View style={styles.item} >
          <View>
            <Image style={{flex: 1, width: 50, borderRadius: 25}} source={{uri: "https://www.rezasafa.com//assets/img/founder-reza-safa.jpg"}} />
          </View> 
          <View style={{flex:1, flexDirection: 'column'}}>
              <Text>{props.program.program}</Text>
              <Text>{props.program.ministry}</Text>
          </View>
            <TouchableOpacity onPress={()=>{props.toggleProgram(props.program.index)}}>
              <Icon name="chevron-down" size={15} color='blue' />
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
        <View style={{flex:1, flexDirection: 'column', height: 300}}>
          <Image style={{flex:1}} source={{uri: "https://jpeg.org/images/jpeg-home.jpg"}}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0)'}}>
          <TouchableOpacity style={{paddingLeft:350}} onPress={()=>{props.toggleProgram(props.program.index)}}><Icon name="times-circle-o" size={20} color="white" /></TouchableOpacity>
            <Text style={styles.text}>{props.program.ministry}</Text>
            <Text style={styles.text}>{props.program.days}</Text>
            <Text style={styles.text}>{props.program.time}</Text>
          <TouchableOpacity style={{flexDirection:"row", paddingTop:150}} onPress={()=>{props.navigation.navigate('BroadcasterInfo', {info: props.program.info})}}>
           <Text style={{color:"blue"}}>More info</Text>
            <Icon name="chevron-right" size={20} color="blue" />
          </TouchableOpacity>
          </View>
          </Image>
         
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
  },
   program: {
    justifyContent: 'center',
  },
  openProgram: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 100
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    height: 60,
    marginLeft: 15,
    marginRight: 15
  },
    itemContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'silver',
  },
  text: {
    color:'white'
  }
})