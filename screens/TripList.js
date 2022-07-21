import { useState } from "react";
import { Button, FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/Card";
import { Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../shared/Header";
import TypeSelect from "../components/TypeSelect";



export default function TripList({ navigation, trips, setTrips, refresh, setRefresh }) {

    const [showModal, setShowModal] = useState(false)




    const handlePress = () => {
        // navigation.navigate('ReviewDetails')
        navigation.push('ReviewDetails', {
            refresh: refresh,
            setRefresh: setRefresh
        })
    }

    {
        if (trips == "No Trips In This Area") {
            return (
                <>
                    <Card>
                        <Text style={globalStyles.titleText} >{trips}</Text>
                    </Card>
                    <Modal visible={showModal} animationType="slide">
                        <SafeAreaView>

                            <View style={globalStyles.modalContent}>


                                <MaterialIcons
                                    name="close"
                                    size={24}
                                    onPress={() => setShowModal(false)}
                                    style={globalStyles.modalToggle}
                                />
                                <Text>Add new driver trip</Text>

                            </View>

                        </SafeAreaView>

                    </Modal >
                    <MaterialIcons
                        name="add"
                        size={24}
                        onPress={() => setShowModal(true)}
                        style={globalStyles.modalToggle}
                    />
                </>)
        } else {


            return (
                <View style={globalStyles.container}>
                    <Modal visible={showModal} animationType="slide">
                        <SafeAreaView>

                            <View style={globalStyles.modalContent}>


                                <MaterialIcons
                                    name="close"
                                    size={24}
                                    onPress={() => setShowModal(false)}
                                    style={globalStyles.modalToggle}
                                />
                                <Text>Add new driver trip</Text>

                            </View>

                        </SafeAreaView>

                    </Modal >



                    <FlatList
                        data={trips}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', {
                                item: item,
                                refresh: refresh,
                                setRefresh: setRefresh
                            })}>
                                <Card>
                                    <Text style={globalStyles.titleText} >{item.driver?.user.first_name}</Text>
                                </Card>

                            </TouchableOpacity>

                        )}
                    />
                    <MaterialIcons
                        name="add"
                        size={24}
                        onPress={() => setShowModal(true)}
                        style={globalStyles.modalToggle}
                    />
                </View >


            )
        }
    }
}


