import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { useEffect, useMemo} from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const MapContainer = () => {
  const navigate = useNavigate();
  const {lat , lon} = useParams(); 
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });
  const center = useMemo(() => ({ lat: Number(lat), lng: Number(lon) }), []);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="App1 d-flex flex-column justify-content-center align-items-center">
          {!isLoaded ? (
            <LoadingSpinner />
          ) : (
            <GoogleMap
              mapContainerClassName="map-container"
              center={center}
              zoom={10}
            >
              <MarkerF position={{ lat: Number(lat), lng: Number(lon) }} />
            </GoogleMap>
          )}
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center">
          <button 
            className="map-button mx-3" 
            onClick={() => navigate(-1)}
          >
            Navigate back
          </button>
          <a href={`https://maps.google.com/?q=${lat},${lon}`} target="_blank"> 
            <button className="map-button mx-3">
              Go to google maps
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default MapContainer;