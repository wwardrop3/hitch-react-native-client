import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import Header from "../shared/Header";
import NewDriverTrip from "../screens/NewDriverTrip";
import NewPassengerTrip from "../screens/NewPassengerTrip";
import SelectDateTime from "../shared/SelectDateTime";
import { useState } from "react";

export default function Drawer({ token }) {
    const [refresh, setRefresh] = useState(false)

    const Drawer = createDrawerNavigator()
    return (

        <Drawer.Navigator initialRouteName="HomeStack">

            <Drawer.Screen name="HomeStack" component={HomeStack} refresh={refresh} setRefresh={setRefresh} options={{
                headerTitle: () => <Header headerTitle="Home" />

            }
            } />


            <Drawer.Screen name="NewDriverTrip" component={NewDriverTrip} refresh={refresh} setRefresh={setRefresh} options={{
                headerTitle: () => <Header headerTitle="New Driver Trip" />

            }
            } />

            <Drawer.Screen name="NewPassengerTrip" component={NewPassengerTrip} refresh={refresh} setRefresh={setRefresh} options={{
                headerTitle: () => <Header headerTitle="New Passenger Trip" />

            }
            } />


        </Drawer.Navigator>

    )
}
