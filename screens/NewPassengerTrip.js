import { Formik } from "formik";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from 'expo-constants';
import SearchBox from "../components/SearchBox";





export default function NewPassengerTrip() {


    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: "", body: "", rating: "", }}
                onSubmit={(values) => {
                    console.log(values)

                }}

            >
                {
                    (props) => {
                        return (
                            <View>
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Review Title"
                                    onChangeText={props.handleChange('title')}
                                    value={props.values.title} />
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Review Body"
                                    onChangeText={props.handleChange('body')}
                                    value={props.values.body}
                                />
                                <TextInput
                                    style={globalStyles.input}
                                    placeholder="Rating"
                                    onChangeText={props.handleChange('rating')}
                                    value={props.values.rating} />

                                <View>
                                    <Button title="Submit" color='maroon' onPress={props.handleSubmit} />

                                </View>

                                <View style={styles.container}>
                                    <SearchBox />

                                </View>
                            </View>
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