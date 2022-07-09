import { Text, View } from "react-native"
import { globalStyles } from "../styles/global"
import Card from "../shared/Card"

export default function ReviewDetails({ route }) {

    const handlePress = () => {
        navigation.goBack()
    }


    return (
        <View style={globalStyles.container} >
            <Card>
                <Text style={globalStyles.titleText} >{route.params.driver.user.first_name} {route.params.driver.user.last_name}</Text>
                <Text style={globalStyles.titleText}> {route.params.origin_place}</Text>
                <Text style={globalStyles.titleText}> {route.params.destination_place}</Text>


            </Card>




        </View>

    )
}

