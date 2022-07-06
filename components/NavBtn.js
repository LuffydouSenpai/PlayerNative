import { StyleSheet, Image } from "react-native";

const NavBtn = (props)=>{
    return(
        <Image source={{
            uri: props.icone
        }}
            style={styles.imgIcone}
        />
    )

}

const styles = StyleSheet.create({
    imgIcone: {
        width:30,
        height:30,
    }
  });

export default NavBtn;