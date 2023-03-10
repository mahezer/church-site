import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: '400px',
  height: '400px',
}

const markerOnLoad = (marker) => {
  console.log(marker)
}

const Map = (props) => <LoadScript googleMapsApiKey="AIzaSyAIy6Dgbt0YVzJZkwc6QvEdsYpV6CkUQcI">
  <GoogleMap 
    id="google-maps-component"
    mapContainerStyle={containerStyle}
    center={props.center}
    zoom={19}
  >
    <Marker 
      position={{ lat: props.center.lat, lng: props.center.lng }} 
      onLoad={markerOnLoad}
    />
  </GoogleMap>
</LoadScript>

export default Map;
