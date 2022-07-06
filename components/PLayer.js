import { Component } from "react";
import { StyleSheet, View, Image, Text} from "react-native";
import { playlist } from "../playlist"
import NavBtn from "./NavBtn";
/* import {Sound} from "react-native-sound" */


class Player extends Component{
    constructor(props){
        super(props)
        
    }
    
    state = {
        currentTrack:0,
        playlist:playlist,
    }

    mp3 = this.initSound();

    initSound(){
        const sound = new Audio(this.state.playlist[this.state.currentTrack].mp3);
        /* Sound.setCategory('Playback');
        const sound = new Sound(this.state.playlist[this.state.currentTrack].mp3, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            // loaded successfully
            console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels()); */
          
            return sound;
           
    };


    
    playMp3(){
        console.log("play")
        
         // Play the sound with an onEnd callback
        /* mp3.play((success) => {
            if (success) {
                console.log('successfully finished playing');
            } else {
                console.log('playback failed due to audio decoding errors');
            }
        }); */
        if (this.mp3.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    play(){
        this.mp3.play();
    }

    pause(){
        this.mp3.pause();
    }

    prev(){
        this.mp3.pause();
        this.setState({currentTrack:this.state.currentTrack-1})
        this.mp3 = this.initSound()
        this.play();
    }

    next(){
        if(this.state.currentTrack === this.state.playlist.length -1){
            index=0
        }else{
            index = this.setState.currentTrack+1;
        }
        this.mp3.pause();
        this.setState({currentTrack:this.state.currentTrack+1})
        this.mp3 = this.initSound()
        this.play();
    }
            

    render(){
        return(
            <View style={this.styles.container}>
            <Text>PLAYING x OF y</Text>
                <Image  source={{
                    //require('../assets/img/cover/tomodachi-game.jpg')
                    uri:this.state.playlist[this.state.currentTrack].cover
                    }}
                    style={this.styles.image}
                />
                <View style={this.styles.navigation}>
                    <NavBtn action={()=>{this.prev()}} icone={"https://cdn-icons.flaticon.com/png/512/5733/premium/5733413.png?token=exp=1657103282~hmac=b752c031dd6a7de41787de338e6bbbe2"}/>
                    <NavBtn action={()=>{this.playMp3()}} icone={"https://cdn-icons.flaticon.com/png/512/4211/premium/4211344.png?token=exp=1657101703~hmac=4c923b4517b4f48bb47e4b193a35161d"}/>
                    <NavBtn icone={"https://cdn-icons-png.flaticon.com/512/151/151859.png"}/>
                    <NavBtn action={()=>{this.next()}} icone={"https://cdn-icons.flaticon.com/png/512/5733/premium/5733742.png?token=exp=1657103308~hmac=3c3b1be7982ff93aa5a9943cacd036be"}/>
                </View>
            </View>
        )
    }

    styles = StyleSheet.create({
        image: {
          height:250,
          width:250, 
        },
        container: {
            height:'100%',
            width:'100%',
            alignItems: 'center',
            backgroundColor: 'purple',
          },
          navigation:{
            flex: 1,
            flexDirection:'row',
          }
      });
}
export default Player;