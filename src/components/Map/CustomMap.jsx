import React, { useRef, useState, forwardRef, useImperativeHandle } from "react";
import { useJsApiLoader, GoogleMap, DirectionsRenderer } from "@react-google-maps/api";

const CustomMap = forwardRef(({}, ref) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
    libraries: ['places']
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [renderKey, setRenderKey] = useState(0);

  let originRef = "";
  let destinationRef = "";


  async function cleanPaths(){

    setDirectionsResponse(null);
    setRenderKey(prevKey => prevKey + 1);

  }

  async function calculateRoute(origin, destination) {
    // Clear previous directions response


    originRef = `${origin[0]}, ${origin[1]}`;
    destinationRef = `${destination[0]}, ${destination[1]}`;
    console.log(originRef);
    console.log(destinationRef);

    if (!originRef || !destinationRef) {
      return;
    }

    // Ensure the directions response is set to null before calculating new route
    await new Promise((resolve) => setTimeout(resolve, 0));

    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef,
      destination: destinationRef,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setRenderKey(prevKey => prevKey + 1); // Update the render key to force re-render
  }

  useImperativeHandle(ref, () => ({
    calculateRoute,
    cleanPaths
  }));

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
        {directionsResponse && <DirectionsRenderer key={renderKey} directions={directionsResponse} />}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
});

export default CustomMap;
