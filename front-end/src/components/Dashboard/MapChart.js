import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + "Bn";
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + "M";
  } else {
    return Math.round(num / 100) / 10 + "K";
  }
};
const markers = [
  {
    markerOffset: -30,
    name: "India",
    coordinates: [77.1025, 23.7041],
  },
  { markerOffset: 15, name: "Russia", coordinates: [105.3188, 61.524] },
  {
    markerOffset: 15,
    name: "United States of America",
    coordinates: [-122.83323371189479, 49.00279319700465],
  },
];
const MapChart = ({ setTooltipContent }) => {
  return (
    <ComposableMap data-tip="" projectionConfig={{ scale: 230 }}>
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              var mark = false;
              markers.map(({ name, coordinates, markerOffset }) => {
                if (name === geo.properties.NAME) {
                  mark = true;
                }
              });

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, POP_EST } = geo.properties;
                    setTooltipContent(`${NAME} — ${rounded(POP_EST)}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  stroke="#FAFAFA"
                  style={{
                    default: {
                      fill: mark ? "#F53" : "#D6D6DA",
                      outline: "none",
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none",
                    },
                  }}
                />
              );
            })
          }
        </Geographies>
        {markers.map(({ name, coordinates, markerOffset }) => (
          <Marker key={name} coordinates={coordinates}>
            <g
              fill="#000"
              stroke="#FF5533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(MapChart);
