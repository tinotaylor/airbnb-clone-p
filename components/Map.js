import ReactMapGl, { Marker, Popup } from "react-map-gl";
import { useState } from "react";
import getCenter from "geolib/es/getCenter";
import { StarIcon } from "@heroicons/react/solid";

function Map({ searchResults, filterResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewPort] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    pitch: 55, // pitch in degrees
    bearing: -50, // bearing in degrees
    zoom: 13,
  });

  return (
    <ReactMapGl
      mapStyle="mapbox://styles/konstantintaylor/cks1w2hvq55it17o51ig65mch"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResults
        .filter((item) => {
          if (filterResults === "") {
            return item;
          } else if (
            item.price.toLowerCase().includes(filterResults.toLowerCase())
          ) {
            return item;
          }
        })
        .map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
            >
              <p
                onClick={() => setSelectedLocation(result)}
                className="animate-bounce"
              >
                📍
              </p>
            </Marker>

            {selectedLocation.long === result.long ? (
              <Popup
                onClose={() => setSelectedLocation({})}
                latitude={result.lat}
                longitude={result.long}
                closeOnClick={true}
              >
                <img
                  src={result.img}
                  className="h-full w-full rounded-2xl object-cover "
                  alt=""
                />
                <div className="absolute font-semibold max-w-[200px] text-white z-20 bottom-5 left-4">
                  <div>
                    <h3 className="">{result.title}</h3>
                    <h4 className="text-xl">{result.price}</h4>
                  </div>
                  <p className="flex items-center">
                    <StarIcon className="h-6 text-red-400" />
                    {result.star}
                  </p>
                  <div></div>
                </div>
                <span className=" w-full absolute  bottom-0 z-10 pointer-events-none transform   p-24 bg-gradient-to-t from-gray-800 "></span>
              </Popup>
            ) : (
              false
            )}
          </div>
        ))}
    </ReactMapGl>
  );
}

export default Map;
