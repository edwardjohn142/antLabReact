import React, { useState, useEffect } from "react";
import { useGoogleMaps } from "react-hook-google-maps";
import {usePosition} from './usePosition';
export const Map = React.memo(function Map() {
  const [value, setValue] = useState(0);
  const {latitude, longitude} = usePosition();
  const { ref, map, google } = useGoogleMaps(
    "AIzaSyC4Z5Qz97EWcoCczNn2IcYvaYG0L9pe6Rk",
    {
      center: { lat: latitude, lng: longitude },
      zoom: 16,
    },
  );
  console.log(usePosition());

  useEffect(() => {
    if (!map) {
      return;
    }
    // map.setLatLng(usePosition());
    setValue(map.getZoom());
    if (map) {
      // execute when map object is ready
      new google.maps.Marker({ position: { lat: latitude, lng: longitude }, map });
    }
    const listener = map.addListener("zoom_changed", () => {
      setValue(map.getZoom());
    });
    return () => google.maps.event.removeListener(listener);

  }, [map, google]);

  const handleZoomUpdate = (zoomChange = 1) => {
    const nextZoom = value + zoomChange;
    if (nextZoom < 0) {
      return;
    }
    map.setZoom(nextZoom);
  };

  return (
    <div>
      <span>External zoom controls example</span>
      <div ref={ref} style={{ height: 500 }} />
      <button onClick={() => handleZoomUpdate(1)}>Zoom In</button>
      <button onClick={() => handleZoomUpdate(-1)} disabled={value < 1}>
        Zoom Out
      </button>
      <div>{value}</div>
    </div>
  );
});