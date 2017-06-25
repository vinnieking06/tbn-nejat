import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export class Program extends React.Component {
  
  open(open, program){
    if (open) {
      return <OpenProgram navdestination={this.props.navdestination} navInfo={this.props.navInfo} OpenProgramInfo={this.props.OpenProgramInfo} toggleProgram={this.props.toggleProgram} navigation={this.props.navigation} program={program} />
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
            <Image style={{flex: 1, width: 50, borderRadius: 25}} source={{uri: props.imageUrl}} />
          </View> 
          {props.programInfo}
            <TouchableOpacity onPress={()=>{props.toggleProgram(props.program.index)}}>
              <Icon name="chevron-down" size={15} color='blue' />
            </TouchableOpacity>

          </View>
            {this.open(props.program.open, props.program)}
        </View>
      )

  }
}

export class OpenProgram extends React.Component {
  render(){
    const props = this.props
    return (
        <View style={{flex:1, flexDirection: 'column', height: 300}}>
          <Image style={{flex:1}} source={{uri: "https://jpeg.org/images/jpeg-home.jpg"}}>
          <View style={{ backgroundColor: 'rgba(0,0,0,0)'}}>
          <TouchableOpacity style={{paddingLeft:350}} onPress={()=>{props.toggleProgram(props.program.index)}}><Icon name="times-circle-o" size={20} color="white" /></TouchableOpacity>
          {props.OpenProgramInfo}
          <TouchableOpacity style={{flexDirection:"row", paddingTop:150}} onPress={()=>{props.navigation.navigate(props.navdestination, {info: props.navInfo})}}>
           <Text style={{color:"blue"}}>More info</Text>
            <Icon name="chevron-right" size={20} color="blue" />
          </TouchableOpacity>
          </View>
          </Image>
         
        </View>
      )
  }
  
}

const styles = StyleSheet.create({
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
  }
})