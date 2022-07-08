import { Text, View } from "react-native"
import { globalStyles } from "../styles/global"

export default function ReviewDetails({ route }) {

    const handlePress = () => {
        navigation.goBack()
    }


    return (
        <View style={globalStyles.container} >
            <Text style={globalStyles.titleText} >{route.params.title}</Text>
            <Text style={globalStyles.titleText}> </Text>
            <Text style={globalStyles.titleText}> </Text>



        </View>

    )
}

