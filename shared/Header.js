import { Image, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


export default function Header({ headerTitle }) {

    const openMenu = () => {
        // navigation.openDrawer()

    }

    return (
        <View style={styles.headerContent} >
            <Image style={styles.icon} source={require("../assets/images/hitch_new_small5.png")} ></Image>
            {/* <Text style={styles.headerText}>{headerTitle}</Text> */}
        </View>
    )
}


const styles = StyleSheet.create({

    headerText: {
        fontWeight: 'bold',
        fontSize: 30,
        width: "100%",

    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: "contain",
        right: 0

    },
    headerContent: {
        flex: 1,
        width: "80%",
        left: 10,
        flexDirection: "row",
        justifyContent: "center",
        resizeMode: "contain",
        height: "100%",

    }
})