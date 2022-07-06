import { Component } from "react";
import { StyleSheet, View, Image, Text} from "react-native";
import { playlist } from "../playlist"
import NavBtn from "./NavBtn";


class Player extends Component{
    state = {
        currentTrack:0,
        playlist:playlist,
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
                    <NavBtn icone={"https://cdn-icons.flaticon.com/png/512/5733/premium/5733413.png?token=exp=1657103282~hmac=b752c031dd6a7de41787de338e6bbbe2"}/>
                    <NavBtn icone={"https://cdn-icons.flaticon.com/png/512/4211/premium/4211344.png?token=exp=1657101703~hmac=4c923b4517b4f48bb47e4b193a35161d"}/>
                    <NavBtn icone={"https://cdn-icons-png.flaticon.com/512/151/151859.png"}/>
                    <NavBtn icone={"https://cdn-icons.flaticon.com/png/512/5733/premium/5733742.png?token=exp=1657103308~hmac=3c3b1be7982ff93aa5a9943cacd036be"}/>
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