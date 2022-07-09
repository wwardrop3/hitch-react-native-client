import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import Header from "../shared/Header";
import NewDriverTrip from "../screens/NewDriverTrip";
import NewPassengerTrip from "../screens/NewPassengerTrip";
import SelectDateTime from "../shared/SelectDateTime";

export default function Drawer({ token }) {

    const Drawer = createDrawerNavigator()
    return (

        <Drawer.Navigator initialRouteName="HomeStack">

            <Drawer.Screen name="HomeStack" component={HomeStack} token={token} options={{
                headerTitle: () => <Header headerTitle="Home" />

            }
            } />


            <Drawer.Screen name="NewDriverTrip" component={NewDriverTrip} token={token} options={{
                headerTitle: () => <Header headerTitle="New Driver Trip" />

            }
            } />

            <Drawer.Screen name="NewPassengerTrip" component={NewPassengerTrip} token={token} options={{
                headerTitle: () => <Header headerTitle="New Passenger Trip" />

            }
            } />


            <Drawer.Screen name="SelectDateTime" component={SelectDateTime} token={token} options={{
                headerTitle: () => <Header headerTitle="Select Date Time" />

            }
            } />
        </Drawer.Navigator>

    )
}
