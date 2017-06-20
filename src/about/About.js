import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import {BroadcasterContainer, BroadcasterInfo} from './Broadcasters';
import {TestimoniesContainer, TestimonyInfo} from './Testimonies';
import Satellite from './Satellite';
import Schedule from './Schedule';
import Founder from './Founder';
import Icon from 'react-native-vector-icons/FontAwesome';

 class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'About Us',
    tabBarIcon: () => (<Icon name="info-circle" size={30} color="white" />)
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
        <ButtonImage page={'Schedule'} changePage={this.changePage} image={'https://jpeg.org/images/jpegls-home.jpg'} />
        <ButtonImage page={'Satellite'} changePage={this.changePage} image={'https://upload.wikimedia.org/wikipedia/commons/e/e6/Trees-sky.jpg'} />
        <ButtonImage page={'Testimonies'} changePage={this.changePage} image={'https://jpeg.org/images/jpegls-home.jpg'} />
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
const About = StackNavigator({
  Home: { screen: HomeScreen},
  Broadcaster: { screen: BroadcasterContainer },
  Schedule: {screen: Schedule},
  Testimonies: {screen: TestimoniesContainer},
  Satellite: {screen: Satellite},
  Founder: {screen: Founder},
  BroadcasterInfo: {screen: BroadcasterInfo},
  TestimonyInfo: {screen: TestimonyInfo}
},{headerMode: 'screen', navigationOptions: {
    headerTintColor: 'black', headerBackTitle: null, headerStyle: {backgroundColor: 'white', borderBottomWidth: 0}
}});

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

export default About;

