import { View, StyleSheet, TextInput, Text } from 'react-native';
import Constants from 'expo-constants';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Geocoder from 'react-native-geocoding';
import { useEffect, useState } from 'react';


const SearchBox = ({ searchLocation, setSearchLocation, initialRegion, setInitialRegion, setLocationPlace = "" }) => {

    Geocoder.init("AIzaSyBCOueWJQtA2QfldCu7_QqN_69X76-F4a8")

    const geocodeAddress = (searchValue) => {
        Geocoder.from(searchValue)
            .then(json => {
                setSearchLocation(json.results[0].geometry.location)
                setLocationPlace(json.results[0].formatted_address)

            })

            .catch(error => console.warn(error))
    }


    return (
        <View>
            <GooglePlacesAutocomplete
                placeholder='Search'
                minLength={2} // minimum length of text to search
                autoFocus={true}
                returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
                keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
                listViewDisplayed={false}   // true/false/undefined
                renderDescription={row => row.description} // custom description render
                onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
                    // console.log(data.description, details);
                    geocodeAddress(data.description)

                }}
                getDefaultValue={() => ''}

                query={{
                    // available options: https://developers.google.com/places/web-service/autocomplete
                    key: "AIzaSyBCOueWJQtA2QfldCu7_QqN_69X76-F4a8",
                    language: 'en', // language of the results
                    region: "CA",
                    // types: '(cities)' // default: 'geocode'
                    types: '',
                }}

                styles={{
                    listView: {
                        position: 'absolute',
                        top: 50,
                        left: 10,
                        right: 10,
                        margin: 10,
                        backgroundColor: 'white',
                        borderRadius: 10,
                        flex: 1,
                        elevation: 3,
                        zIndex: 20,
                    },
                    textInputContainer: {
                        margin: 0,
                        width: '100%',
                        padding: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        zIndex: 20,

                    },
                    textInput: {
                        backgroundColor: '#F9F5F4',
                        borderRadius: 5,
                        width: "100%",
                        margin: 10,
                        zIndex: 20,

                    },
                    description: {
                        // color: '#ac879a',
                        fontWeight: '300',
                        zIndex: 20,

                    },
                    predefinedPlacesDescription: {
                        color: '#1faadb',
                        zIndex: 20,

                    }
                }}





                enablePoweredByContainer={true}
                debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
                renderLeftButton={() => { }}
                renderRightButton={() => { }}
            />


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        backgroundColor: '#ecf0f1',
    },
});

export default SearchBox;
