import { Button, Text, View } from "react-native"
import { globalStyles } from "../styles/global"
import Card from "../shared/Card"
import { delete_driver_trip } from "../authManager"
import * as SecureStore from "expo-secure-store"
import { useEffect, useState } from "react"



export default function ReviewDetails({ route, navigation }) {
    const [token, setToken] = useState()

    async function getValueFor(key) {

        let result = await SecureStore.getItemAsync(key);
        if (result) {
            // alert("🔐 Here's your value 🔐 \n" + result);
            return result
        } else {
            alert('No values stored under that key.');
        }
    }

    useEffect(
        () => {
            getValueFor('token')
                .then(
                    (response) => {
                        setToken(response)
                    }
                )
        }, []
    )



    const handleDelete = (id) => {
        delete_driver_trip(id, token)
            .catch(e => console.log(e))
            .then(
                () => {
                    navigation.goBack()

                }
            ).catch(e => console.log(e))
            .then(
                () => {
                    route.params.setRefresh(!route.params.refresh)
                }
            )
    }


    return (
        <View style={globalStyles.container} >
            <Card>
                <Text style={globalStyles.titleText} >{route.params.item.driver.user.first_name} {route.params.item.driver.user.last_name}</Text>
                <Text style={globalStyles.titleText}> {route.params.item.origin_place}</Text>
                <Text style={globalStyles.titleText}> {route.params.item.destination_place}</Text>
                <Button title="Delete Trip" onPress={() => handleDelete(route.params.item.id)} />


            </Card>




        </View>

    )
}

