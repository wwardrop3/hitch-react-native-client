import { useState } from "react"
import { loginUser } from "../authManager"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import * as SecureStore from 'expo-secure-store'
import { globalStyles } from "../styles/global"
import Card from "../shared/Card"


async function save(key, value) {
    await SecureStore.setItemAsync(key, value)
}




export default function LoginLandingPage({ navigation, userToken, setUserToken }) {
    const [token, setTokenState] = useState("")


    const [isUnsuccessful, setisUnsuccessful] = useState(false)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const user = {
        username: username,
        password: password,
    }


    const setToken = async (newToken) => {
        save('token', newToken)

    }


    const handleLogin = (e) => {


        loginUser(user).then(res => {
            if ("valid" in res && res.valid) {
                setToken(res.token)
                    .then(
                        () => {
                            navigation.navigate('Drawer', token)
                        }

                    )
            }
            else {
                setisUnsuccessful(true)
            }
        })
    }

    const handleUsername = (val) => {
        setUsername(val)
    }

    const handlePassword = (val) => {
        setPassword(val)
    }



    return (
        <SafeAreaView style={globalStyles.container}>
            <ImageBackground style={styles.backgroundImage} source={require("../assets/images/loginBackgroundImage.jpeg")}>
                <View style={{ justifyContent: "space-around", alignItems: "center", margin: 30 }} >
                    <View  >
                        <Text style={{
                            paddingVertical: 30,
                            alignSelf: "center", fontSize: 60, fontWeight: "bold", shadowRadius: 10, color: "white", textShadowColor: 'rgba(10, 5, 0, 1)',
                            textShadowOffset: { width: -10, height: 5 },
                            textShadowRadius: 10
                            ,
                        }}>BATON</Text>
                    </View>
                    <View>
                        <View style={{ width: 200 }} >
                            <TextInput
                                style={{ width: "100%", borderColor: "black", borderWidth: 1, padding: 3, borderRadius: 6, margin: 4, backgroundColor: "white", fontSize: 20 }}
                                placeholder="Enter Username"
                                autoCapitalize="none"
                                onChangeText={(val) => handleUsername(val)} />

                            <TextInput
                                style={{ width: "100%", borderColor: "black", borderWidth: 1, padding: 3, borderRadius: 6, margin: 4, backgroundColor: "white", fontSize: 20 }}
                                placeholder="Enter Password"
                                autoCapitalize="none"
                                onChangeText={(val) => handlePassword(val)}
                            />
                            <View style={{ backgroundColor: 'rgba(10, 5, 0, 1)', borderRadius: 40 }}>
                                <Button color={"white"} title="Submit" onPress={() => handleLogin()}></Button>

                            </View>

                        </View>

                    </View>
                </View>


            </ImageBackground>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        width: "100%",
        height: "110%"

    },
})
