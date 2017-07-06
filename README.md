To fix the video playing issue:
1- Open react-native-video-controls node_module
2- Open VideoPlayer.js
3- Add this line of code to the this.methods object:
    stopVideo: this._stopVideo.bind( this )
4- Add this line of code under the _togglePlayPause function declaration: 
        _stopVideo() {
        let state = this.state;
        state.paused = true;
        this.setState( state );
    }
