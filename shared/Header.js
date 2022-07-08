import { StyleSheet, Text, View } from "react-native";



export default function Header({ headerTitle }) {

    return (
        <View style={StyleSheet.header} >
            {/* icon for menu */}
            <View>
                <Text style={styles.headerText}>{headerTitle}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        letterSpacing: 1,

    }
})