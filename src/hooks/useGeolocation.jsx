import { useEffect, useState } from "react";

function useGeolocation() {
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lang: position.coords.longitude,
        });
        console.log("set");
      },
      (err) => {
        setCoords({ lat: " 28.644800", lang: " 77.216721" });
      }
    );
  }, []);
  return coords;
}

export default useGeolocation;
