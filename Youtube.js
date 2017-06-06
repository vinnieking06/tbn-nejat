import React from 'react';
import { StyleSheet, Text, View,Button, TextInput, TouchableOpacity, WebView, Image, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator, withNavigation } from "react-navigation";
import Data from './YoutubeData';

const Video = (props) => {
    console.log(props)
       return (
           <View style={{flex:1}}>
                    <TouchableOpacity onPress={props.back}>
                        <Text>back</Text>
                    </TouchableOpacity>
           <WebView
                style={{flex:1}}
                javaScriptEnabled={true}
                source={{uri: props.vid}}
            />
            </View>
       )
}

const Youtube = (props) => {
        const data = props.video;
        return (
            <View style={styles.video}>
                <Text>
                    Title: {data.title}
                    Description: {data.shortDescription}
                    Length: {data.duration}
                    </Text>
                    <TouchableOpacity onPress={function(){props.videoView(data.url)}}>
                        <Image style={styles.thumbnail} source={{uri: data.thumbnail }} />
                    </TouchableOpacity>

            </ View>
        );
  } 

export default class YoutubeContainer extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Youtube',
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./youtube.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
   };

    constructor(props) {
        super(props);
        this.state = {videoData: '', videoView: false, videoUrl:""};
        this.videoView = this.videoView.bind(this);
    }

  videoView(url) {
    this.setState({videoView: !this.state.videoView, videoUrl: url})
   }

  componentDidMount(){
    this.setState({videoData: Data})
  }

  render() {
    const data = this.state.videoData;
    const videoComponents = [];
    for (let i = 0; i < data.length; i++) {
        videoComponents.push(<Youtube videoView={this.videoView} key={i} video={data[i]} />)
    }

    if (!this.state.videoView){
        return (
            <ScrollView >
            {videoComponents}
            </ScrollView>
        );
    } else {
        return (
            <Video back={this.videoView} vid={this.state.videoUrl} />
        )
    }

  }
}

const styles = StyleSheet.create({
    video: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#00ff00',

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
