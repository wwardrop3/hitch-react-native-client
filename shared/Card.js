import { StyleSheet, View } from "react-native";
import { clickProps } from "react-native-web/dist/cjs/modules/forwardedProps";



export default function Card(props) {


    return (
        <View style={styles.card}>

            <View style={styles.cardContent}>
                {props.children}
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,


    },

    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,

    }
})