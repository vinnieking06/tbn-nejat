import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { navigation } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'About Us'
  };

  constructor(props){
    super(props);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ButtonImage page={'Broadcaster'} changePage={this.changePage} image={'https://jpeg.org/images/jpeg2000-home.jpg'} />
        <ButtonImage page={'Schedule'} changePage={this.changePage} image={'https://svs.gsfc.nasa.gov/vis/a010000/a011100/a011146/still_nile_576.jpg'} />
        <ButtonImage page={'Satellite'} changePage={this.changePage} image={'https://upload.wikimedia.org/wikipedia/commons/e/e6/Trees-sky.jpg'} />
        <ButtonImage page={'Testimonies'} changePage={this.changePage} image={'https://svs.gsfc.nasa.gov/vis/a010000/a011100/a011146/still_nile_576.jpg'} />
        <ButtonImage page={'Founder'} changePage={this.changePage} image={'https://www.mycadsite.com/cad_08/tutorials/level_3/images/sky.jpg'} />
      </View>
    );
  }
}

const ButtonImage = (props) => {
  return (
       <TouchableOpacity style={{flex:1}} onPress={() => props.changePage(props.page)}>
          <Image style = {styles.button} source={{uri: props.image}}>
              <Text style={styles.text}>{props.page}</Text>
          </Image>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)'
  
  },
  button: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
   
  },
  text: {
    marginLeft: 10,
    color: 'white'
  }
})



