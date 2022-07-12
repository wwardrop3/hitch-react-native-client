import { Formik } from "formik";
import { Button, KeyboardAvoidingView, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import Constants from 'expo-constants';
import SearchBox from "../components/SearchBox";
import { useEffect, useState } from "react";
import { create_new_driver_trip } from "../authManager";
import { getDirections } from "../shared/GetDirections";
import SelectDateTime from "../shared/SelectDateTime";
import * as SecureStore from 'expo-secure-store'
import TripList from "./TripList";


export default function NewDriverTrip({ navigation }) {

    const [directionObject, setDirectionsObject] = useState()
    const [origin, setOrigin] = useState()
    const [destination, setDestination] = useState()
    const [originPlace, setOriginPlace] = useState()
    const [destinationPlace, setDestinationPlace] = useState()
    const [startDate, setStartDate] = useState(new Date())
    const [showDate, setShowDate] = useState(false)
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


    const handleSubmit = (values) => {
        const directions = getDirections(`${origin?.lat},${origin.lng}`, `${destination.lat}, ${destination.lng}`, directionObject, setDirectionsObject)
        const newTrip = {}
        newTrip.detour_radius = parseInt(values.detourRadius)
        newTrip.seats = values.seatsAvailable
        newTrip.trip_summary = values.tripSummary
        newTrip.origin = origin
        newTrip.completed = false
        newTrip.completion_date = ""
        newTrip.creation_date = ""
        newTrip.tags = ""
        newTrip.destination = destination
        newTrip.origin_place = originPlace
        newTrip.destination_place = destinationPlace
        console.log(directionObject.directionOverview)
        newTrip.start_date = startDate
        newTrip.path = directionObject?.directionOverview.routes[0].overview_polyline.points
        newTrip.is_approved = false
        newTrip.trip_distance = directionObject?.directionOverview.routes[0].legs[0].distance.value
        newTrip.expected_travel_time = directionObject?.directionOverview.routes[0].legs[0].duration.value


        create_new_driver_trip(newTrip, token).then(e => navigation.navigate('HomeStack', { screen: 'HomePage' }))

        console.log(newTrip)
        newTrip = {}



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











    return (
        <View style={globalStyles.container}>

            <Formik
                initialValues={{ detourRadius: "", seatsAvailable: "", tripSummary: "", }}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}

            >
                {
                    (props) => {
                        return (
                            <>
                                <View style={globalStyles.container} >


                                    <Button title="Select Date" onPress={() => setShowDate(!showDate)}>Select Departure Date</Button>
                                    <Text>{startDate.toLocaleDateString()}</Text>
                                    <View>

                                        <Modal visible={showDate} animationType="slide" style={{ backgroundColor: "transparent" }} >
                                            <SafeAreaView >

                                                <View>


                                                    <SelectDateTime chosenDate={startDate} setChosenDate={setStartDate} showDate={showDate} setShowDate={setShowDate} />

                                                </View>

                                            </SafeAreaView>

                                        </Modal >
                                    </View>


                                    <View>


                                        <TextInput
                                            style={globalStyles.input}
                                            placeholder="Detour Radius"
                                            onChangeText={props.handleChange('detourRadius')}
                                            value={props.values.detourRadius}
                                            keyboardType="number-pad"
                                        />
                                        <TextInput
                                            style={globalStyles.input}
                                            placeholder="Seats Available"
                                            onChangeText={props.handleChange('seatsAvailable')}
                                            value={props.values.seatsAvailable}
                                            keyboardType="numeric"
                                        />
                                        <TextInput
                                            style={globalStyles.input}
                                            placeholder="Trip Summary"
                                            onChangeText={props.handleChange('tripSummary')}
                                            value={props.values.tripSummary}

                                        />

                                    </View>

                                    <View style={{ width: "100%", flex: 1 }} >
                                        <View style={globalStyles.container}>

                                            <SearchBox searchLocation={origin} setSearchLocation={setOrigin} setLocationPlace={setOriginPlace} />
                                        </View>

                                        <View style={globalStyles.container} >
                                            <SearchBox searchLocation={destination} setSearchLocation={setDestination} setLocationPlace={setDestinationPlace} />
                                        </View>
                                    </View>



                                </View>
                                <View style={{ position: "absolute" }}>
                                    <Button title="Submit" color='maroon' onPress={props.handleSubmit} />

                                </View>

                            </>
                        )
                    }
                }
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        paddingTop: Constants.statusBarHeight + 10,
        backgroundColor: '#ecf0f1',
    },
});