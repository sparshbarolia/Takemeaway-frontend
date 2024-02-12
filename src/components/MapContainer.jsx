import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo} from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

// const MapContainer = ({lat=28.6523778  , lon=77.1584343 , mapToggle }) => {
const MapContainer = ({lat, lon , mapToggle }) => {

  // const navigate = useNavigate();
  // const {lat , lon} = useParams(); 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });
  const center = useMemo(() => ({ lat: lat, lng: lon }), []);

  useEffect(() => {
    console.log("inside map",lat,lon);
  },[lat,lon])

  return (
    <>
        <div className="App1 d-flex flex-column justify-content-center align-items-center" style={{maxHeight:mapToggle?'60vh':'0vh'}}>
          {!isLoaded ? (
            <LoadingSpinner />
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={20}
            >
              <MarkerF position={{ lat: lat, lng: lon }} />
            </GoogleMap>
          )}
        </div>
    </>
  );
};

export default MapContainer;