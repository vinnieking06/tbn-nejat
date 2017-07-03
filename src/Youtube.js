import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, WebView, Image, ScrollView, Dimensions } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation, navigation } from "react-navigation";
import Data from './../assets/YoutubeData';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome';

class YoutubeContainer extends React.Component {
    
  static navigationOptions = {
    tabBarLabel: 'Youtube',
    title: 'Youtube',
    tabBarIcon: ()=> (<Icon name="youtube" size={30} color="white" />)
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

class Youtube extends React.Component {
        secondsParser(time){
            // Hours, minutes and seconds
            var hrs = ~~(time / 3600);
            var mins = ~~((time % 3600) / 60);
            var secs = time % 60;

            var ret = "";

            if (hrs > 0) {
                ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
            }

            ret += "" + mins + ":" + (secs < 10 ? "0" : "");
            ret += "" + secs;
            return ret;
        }
        render(){
            const data = this.props.video;
            const parsedTime = this.secondsParser(data.duration);

            return (
                <View style={styles.video}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('Video', {video: data.url})}}>
                        <Image source={{uri: 'https://jpeg.org/images/jpegls-home.jpg'}} style={styles.thumbnail} />
                    </TouchableOpacity>
                    <View style={{flex:1}}>
                        <Text style={{fontSize: 9, fontWeight: 'bold'}}>{data.title}</Text>
                        <Text style={{fontSize: 8}}>{data.shortDescription}</Text>
                        <Text style={{fontSize: 8}}>Length: {parsedTime}</Text>
                    </View>
                </ View>
            );
        }
  } 


class Mideo extends React.Component {
    render() {
       return (
        <Video style={styles.backgroundVideo} muted={false}  resizeMode="cover"   ref={ref => this.videoRef = ref} source={{uri: "https://player.vimeo.com/external/210669689.hd.mp4?s=4316aec92a87ee86a734f0e134ad6ba161549cba&profile_id=119"}} />
       ) 
    }
}

const YoutubeRouter = StackNavigator({
  List: { screen: YoutubeContainer},
  Video: {screen: Mideo}},
  {headerMode: 'screen', navigationOptions: {
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
        flex:1
  },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
  },
})

export default YoutubeRouter