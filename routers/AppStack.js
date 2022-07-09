import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginLandingPage from "../screens/LoginLandingPage";
import Header from "../shared/Header";
import Drawer from "./Drawer";


export default function AppStack() {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginLandingPage">
                <Stack.Screen
                    name="LoginLandingPage"
                    component={LoginLandingPage}
                    options={{
                        headerShown: false,
                        headerTitle: () => <Header headerTitle="Login" />

                    }}
                />
                <Stack.Screen
                    name="Drawer"
                    component={Drawer}
                    options={{
                        headerShown: false,
                        headerTitle: () => <Header headerTitle="Content" />

                    }
                    } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
