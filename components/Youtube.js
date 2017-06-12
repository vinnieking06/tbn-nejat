import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import Data from './../assets/YoutubeData';
const youTubeIcon = require('./../assets/youtube.png');

class Video extends React.Component {

    render() {
       return (
           <View style={{flex:1}}>
           <WebView
                style={{flex:1, marginTop: 10}}
                javaScriptEnabled={true}
                source={{uri: this.props.navigation.state.params.video }}
            />
            </View>
       ) 
    }

}

class Youtube extends React.Component {
        render(){
            const data = this.props.video;
            return (
                <View style={styles.video}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Video', {video: data.url})}}>
                        <Image style={styles.thumbnail} source={{uri: data.thumbnail }} />
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <Text style={{fontSize: 9, fontWeight: 'bold'}}>{data.title}</Text>
                        <Text style={{fontSize: 8}}>{data.shortDescription}</Text>
                        <Text style={{fontSize: 8}}>Length: {data.duration}</Text>
                    </View>
                </ View>
            );
        }
  } 

class YoutubeContainer extends React.Component {
    
  static navigationOptions = {
    tabBarLabel: 'Youtube',
    title: 'Youtube',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={youTubeIcon}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
   };

    constructor(props) {
        super(props);
        this.state = {videoData: ''};
    }


  componentDidMount(){
    this.setState({videoData: Data})
  }

  render() {
    const data = this.state.videoData;
    const videoComponents = [];
    for (let i = 0; i < data.length; i++) {
        videoComponents.push(<Youtube videoView={this.videoView} key={i} video={data[i]} navigation={this.props.navigation} />)
    }
        return (
            <ScrollView contentContainerStyle={{flexDirection:'column', flex:1, justifyContent:'space-between', marginLeft:10, marginRight:10 }} >
            {videoComponents}
            </ScrollView>
        );
  }
}

const YoutubeRouter = StackNavigator({
  List: { screen: YoutubeContainer},
  Video: {screen: Video}
},{headerMode: 'screen', navigationOptions: {
headerTintColor: 'black', headerBackTitle: null, headerStyle: {backgroundColor: null, borderBottomWidth: 0}
}});

const styles = StyleSheet.create({
    video: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    icon: {
        flex: 1,
        width: 30
    },
    thumbnail: {
        width: 100,
        height: 100,
  }
})

export default YoutubeRouter