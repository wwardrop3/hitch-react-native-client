import { Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { globalStyles } from "../styles/global";

import MapView, { Callout, MapMarker, Marker, Polyline, PROVIDER_DEFAULT, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useState } from "react";
import { get_all_driver_trips } from "../authManager";
import * as SecureStore from 'expo-secure-store'
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SearchBox from "../components/SearchBox";
import Home from "./TripList";
import TripList from "./TripList";
const mapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffeb3b"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#d6d1d1"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#585555"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebf5ff"
            },
            {
                "visibility": "on"
            }
        ]
    }
]


async function getValueFor(key) {



    let result = await SecureStore.getItemAsync(key);
    if (result) {
        // alert("🔐 Here's your value 🔐 \n" + result);
        return result
    } else {
        alert('No values stored under that key.');
    }
}





export default function HomePage({ navigation, refresh, setRefresh }) {

    const [initialRegion, setInitialRegion] = useState(true)

    const [region, setRegion] = useState(
        {
            latitude: 41.86229113012015,
            longitude: -87.65918737972537,
            latitudeDelta: 2,
            longitudeDelta: 2
        }
    )

    const [searchLocation, setSearchLocation] = useState({ lat: 41.86229113012015, lng: -87.65918737972537 })
    const [text, setText] = useState("asdf")

    const [lineColor, setLineColor] = useState(
        {
            id: "",
            color: "red",
        }
    )

    const handleMapPress = (trip) => {
        setLineColor({
            id: trip.id,
            color: "red"
        })

    }

    const transformPoints = (pathPoints) => {
        const newPoints = []
        pathPoints.map((point) => {
            newPoints.push({ latitude: point.lat, longitude: point.lng })
        })

        return newPoints
    }



    const [trips, setTrips] = useState("")

    useEffect(
        () => {
            getValueFor('token')
                .then(
                    (res) => {
                        get_all_driver_trips(searchLocation.lat, searchLocation.lng, res)
                            .then(
                                (response) => {
                                    setTrips(response)
                                }
                            )



                            .catch((e) => {
                                console.log(e)
                            }
                            )


                    }
                )

        }, [searchLocation, refresh]
    )


    useEffect(
        () => {
            setRegion(
                {
                    latitude: searchLocation.lat,
                    longitude: searchLocation.lng,
                    latitudeDelta: 1,
                    longitudeDelta: 1
                }
            )
        }, [trips]
    )


    return (
        <View>



            <TouchableWithoutFeedback onPress={() => setLineColor("")}>
                <View style={{ height: "50%" }} >


                    <MapView region={initialRegion ? region : region} initialRegion={region}
                        showsMyLocationButton={true} showsCompass={true} style={{ height: "100%", width: "100%" }} provider={PROVIDER_DEFAULT} customMapStyle={mapStyle}>
                        <View>
                            <SearchBox searchLocation={searchLocation} setSearchLocation={setSearchLocation} text={text} setText={setText} />
                        </View>

                        {trips ? trips.map((trip) => {
                            let path_points = transformPoints(trip?.path_points)
                            return (
                                <>

                                    <Marker
                                        key={trip.creation_date}
                                        title={trip.driver.user.first_name}
                                        pinColor={"green"}
                                        coordinate={{ latitude: trip.origin.lat, longitude: trip.origin.lng }}
                                        showsMyLocationButton={true}
                                        onPress={() => handleMapPress(trip)
                                        }

                                    />

                                    <Marker
                                        key={trip.id}
                                        title={trip.driver.user.first_name}
                                        pinColor={"red"}
                                        coordinate={{ latitude: trip.destination.lat, longitude: trip.destination.lng }}
                                        showsMyLocationButton={true}
                                        onPress={() => handleMapPress(trip)
                                        }

                                    />



                                    <Polyline
                                        key={trip.origin_place}
                                        coordinates={path_points}
                                        strokeColor={lineColor.id == trip.id ? "red" : "dodgerblue"}
                                        fillColor="rgba(255,0,0,0.5)"
                                        strokeWidth={2}
                                        onPress={() => handleMapPress(trip)
                                        }



                                    />


                                </>
                            )

                        }

                        )

                            : <Text></Text>}









                    </MapView>

                </View>
            </TouchableWithoutFeedback >
            <View style={{ height: "50%" }}>

                <TripList refresh={refresh} setRefresh={setRefresh} navigation={navigation} trips={trips.length > 0 ? trips : "No Trips In This Area"} initialRegion={initialRegion} setInitialRegion={setInitialRegion} />

            </View>

        </View >

    )






}

