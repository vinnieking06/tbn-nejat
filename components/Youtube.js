import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, WebView, Image, ScrollView, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import Data from './../assets/YoutubeData';
const youTubeIcon = require('./../assets/youtube.png');
import Video from 'react-native-video';

class Mideo extends React.Component {

    componentDidMount(){
        this.videoRef.presentFullscreenPlayer()
    }
    render() {
       return (

            <Video style={styles.backgroundVideo} ref={ref => this.videoRef = ref} source={{uri: "https://player.vimeo.com/external/210669689.hd.mp4?s=4316aec92a87ee86a734f0e134ad6ba161549cba&profile_id=119"}} />

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
  Video: {screen: Mideo}
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
  },
    backgroundVideo: {

  },
})

export default YoutubeRouter