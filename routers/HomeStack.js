import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../shared/Header";
import HomePage from "../screens/HomePage";
import TripList from "../screens/TripList";
import ReviewDetails from "../screens/ReviewDetails";


export default function HomeStack({ refresh, setRefresh }) {

    const Stack = createNativeStackNavigator()

    return (


        <Stack.Navigator>
            <Stack.Screen
                name="HomePage"
                component={HomePage}
                refresh={refresh}
                setRefresh={setRefresh}
                options={{
                    headerShown: false,
                    headerTitle: () => <Header headerTitle="Home" />

                }
                } />


            <Stack.Screen
                name="TripList"
                component={TripList}
                refresh={refresh}
                setRefresh={setRefresh}
                options={{
                    headerTitle: () => <Header headerTitle="Trip List" />

                }
                } />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                refresh={refresh}
                setRefresh={setRefresh}
            />


        </Stack.Navigator>)
}
