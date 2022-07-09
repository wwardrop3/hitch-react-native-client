import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "rgba(0,0,0,0)"
    },
    titleText: {
        fontSize: 18,
        color: "#333"
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    modalToggle: {
        fontSize: 40,
        marginBottom: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: "#f2f2f2",
        padding: 10,
        borderRadius: 10,
        alignSelf: "flex-end"


    }
})