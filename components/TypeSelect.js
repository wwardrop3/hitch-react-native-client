import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";


export default function TypeSelect() {


    return (


        <View style={styles.image} >
            <Image source={require('../assets/images/thumbup.jpg')} />
            <Image source={require('../assets/images/driverimage.jpeg')} />

        </View>






    )
}

const styles = StyleSheet.create({
    image: {
        backgroundColor: "black",
        width: "50%",
        justifyContent: "space-around",
        resizeMode: "center"
    }




})
