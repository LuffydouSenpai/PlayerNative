import { StyleSheet, Image, Button, TouchableHighlight } from "react-native";

const NavBtn = (props)=>{
    return(
        <TouchableHighlight onPress={props.action}>
            <Image  source={{
                uri: props.icone
            }}
                style={styles.imgIcone}
            />
        </TouchableHighlight>
    )

}

const styles = StyleSheet.create({
    imgIcone: {
        width:30,
        height:30,
    }
  });

export default NavBtn;