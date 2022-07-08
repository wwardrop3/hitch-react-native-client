import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";
import Header from "../shared/Header";

export default function AboutStack() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="About"
                component={About}
                options={{
                    headerTitle: () => <Header headerTitle="About" />
                }

                }
            />
        </Stack.Navigator>
    )
}