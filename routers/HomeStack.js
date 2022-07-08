import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetail";
import Header from "../shared/Header";


export default function HomeStack() {

    const Stack = createNativeStackNavigator()

    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: () => <Header headerTitle="Home" />

                }
                } />
            <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
        </Stack.Navigator>)
}
