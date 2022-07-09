import { decode } from "@mapbox/polyline"; //please install this package before running!


export const getDirections = async (startLoc, destinationLoc, directionObject, setDirectionsObject) => {
    try {
        const KEY = "AIzaSyBCOueWJQtA2QfldCu7_QqN_69X76-F4a8"
        //otherwise, you'll have an 'unauthorized' error.
        let resp = await fetch(
            `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc}&destination=${destinationLoc}&key=${KEY}`
        );
        let respJson = await resp.json();
        let points = decode(respJson.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
            return {
                latitude: point[0],
                longitude: point[1]
            };
        });
        setDirectionsObject({
            path: coords,
            directionObject: respJson
        })
        return directionsObject;
    } catch (error) {
        return error;
    }
};