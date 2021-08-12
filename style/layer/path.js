var layerPathFill = {
  id: "path",
  type: "line",
  paint: {
    "line-color": "brown",
    "line-width": {
      base: 1.2,
      stops: [
        [13, 0.5],
        [20, 10],
      ],
    },
    "line-opacity": 1,
    "line-dasharray": [5, 5],
  },
  filter: [
    "all",
    ["==", "$type", "LineString"],
    ["==", "class", "path"],
    ["!in", "network", "hike-international", "hike-national"],
  ],
  layout: {
    "line-join": "round",
    visibility: "visible",
  },
  minzoom: 12,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerPathFillNational = {
  id: "path-national",
  type: "line",
  paint: {
    "line-color": "brown",
    "line-width": {
      base: 1.2,
      stops: [
        [13, 1.0],
        [20, 20],
      ],
    },
    "line-opacity": 1,
    "line-dasharray": [5, 5],
  },
  filter: [
    "all",
    ["==", "$type", "LineString"],
    ["==", "class", "path"],
    ["in", "network", "hike-international", "hike-national"],
  ],
  layout: {
    "line-join": "round",
    visibility: "visible",
  },
  minzoom: 12,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerPathLabel = {
  id: "path_label",
  type: "symbol",
  paint: {
    "text-color": "brown",
    "text-halo-color": "#fff",
    "text-halo-blur": 0.5,
    "text-halo-width": 1,
  },
  filter: ["all", ["==", "class", "path"]],
  layout: {
    "text-font": ["Metropolis Light"],
    "text-size": 12,
    "text-field": "{name:latin} {name:nonlatin}",
    "text-anchor": "bottom",
    "text-offset": [0, 0.2],
    "symbol-placement": "line",
  },
  minzoom: 12,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation_name",
};
