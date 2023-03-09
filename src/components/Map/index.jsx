import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "@react-google-maps";
import { compose, withProps } from "react-recompose";

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAIy6Dgbt0YVzJZkwc6QvEdsYpV6CkUQcI",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
    )(({ lat, lng }) => 
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat, lng }}
        >
            <Marker position={{ lat, lng }} />
        </GoogleMap>
    );

export default Map;