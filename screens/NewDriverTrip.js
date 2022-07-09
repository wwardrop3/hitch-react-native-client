import { Formik } from "formik";
import { Button, KeyboardAvoidingView, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import Constants from 'expo-constants';
import SearchBox from "../components/SearchBox";
import { useState } from "react";
import { create_new_driver_trip } from "../authManager";
import { getDirections } from "../shared/GetDirections";
import SelectDateTime from "../shared/SelectDateTime";

export default function NewDriverTrip() {

    const [directionObject, setDirectionsObject] = useState()
    const [origin, setOrigin] = useState()
    const [destination, setDestination] = useState()
    const [originPlace, setOriginPlace] = useState()
    const [destinationPlace, setDestinationPlace] = useState()
    const [startDate, setStartDate] = useState(new Date())
    const [showDate, setShowDate] = useState(false)




    const handleSubmit = () => {
        const directions = getDirections(`${origin.lat},${origin.lng}`, `${destination.lat}, ${destination.lng}`, directionObject, setDirectionsObject)
        const newTrip = {}
        newTrip.origin = origin
        newTrip.destination = destination
        newTrip.originPlace = originPlace
        newTrip.destinationPlace = directionObject
        newTrip.directions = directions

        // create_new_driver_trip(newTrip)
        console.log(directionObject.path)

    }











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

                                            <SearchBox searchLocation={origin} setSearchLocation={setOrigin} setOriginPlace={setOriginPlace} originPlace={setOriginPlace} />
                                        </View>

                                        <View style={globalStyles.container} >
                                            <SearchBox searchLocation={destination} setSearchLocation={setDestination} setDestinationPlace={setDestinationPlace} destinationPlace={destinationPlace} />
                                        </View>
                                    </View>



                                </View>
                                <View>
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