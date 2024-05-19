import React, { useRef, useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { useJsApiLoader, GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

const CustomMap = forwardRef(({ initialPosition }, ref) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB-i1B6W5D4fG-pkltNgw8QZlTw8mmBAjc",
    libraries: ['places']
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  let originRef = "";
  let destinationRef = "";

  async function calculateRoute(origin, destination) {
    originRef = `${origin[0]}, ${origin[1]}`;
    destinationRef = `${destination[0]}, ${destination[1]}`;
    console.log(originRef);
    console.log(destinationRef);
    
    if (!originRef || !destinationRef) {
      return;
    }

    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef,
      destination: destinationRef,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
  }

  useImperativeHandle(ref, () => ({
    calculateRoute,
  }));

  useEffect(() => {
    console.log(initialPosition[0]);
    if (initialPosition && map) {
      const origin = initialPosition;
      const destination = [41.61674, 0.62218];
      calculateRoute(origin, destination);
    }
  }, [initialPosition, map]);

  return isLoaded ? (
    <>
      <div className="p-5"></div>
      <GoogleMap
        zoom={5}
        mapContainerStyle={{ height: "400px" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        onLoad={(map) => setMap(map)}
      >
        
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
});

export default CustomMap;
