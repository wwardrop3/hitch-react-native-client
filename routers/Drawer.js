import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

export default function Drawer() {

    const Drawer = createDrawerNavigator()
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="HomeStack" component={HomeStack} />
                <Drawer.Screen name="AboutStack" component={AboutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
