var layerMotorwayLink = {
  id: "road_motorway_link",
  type: "line",
  paint: {
    "line-color": colorMotorway,
    "line-width": {
      base: 1.2,
      stops: [
        [12.5, 0],
        [13, 1.5],
        [14, 2.5],
        [20, 11.5],
      ],
    },
  },
  filter: [
    "all",
    ["!in", "brunnel", "bridge", "tunnel"],
    ["==", "class", "motorway"],
    ["==", "ramp", 1],
  ],
  minzoom: 12,
  layout: layoutRoad,
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation",
};

var layerMotorway = {
  id: "road_motorway",
  type: "line",
  paint: {
    "line-color": colorMotorway,
    "line-width": {
      base: 1.2,
      stops: [
        [4, 0],
        [7, 1],
        [20, 18],
      ],
    },
  },
  filter: [
    "all",
    ["!in", "brunnel", "bridge", "tunnel"],
    ["==", "class", "motorway"],
    ["!=", "ramp", 1],
  ],
  layout: layoutRoad,
  source: "openmaptiles",
  minzoom: 6,
  metadata: {},
  "source-layer": "transportation",
};

var layerMotorwayInterstate12 = {
  id: "road_motorway_interstate_12",
  type: "line",
  paint: {
    "line-color": {
stops: [
  [5, "hsla(354, 71%, 88%, 1)"],
  [6, "hsla(354, 80%, 80%, 1)"]
],
},
    "line-width": {
      stops: [
        [5, 1.5],
        [6, 2],
        [7, 3],
      ],
    },
  },
  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "network", "us-interstate"],
    ["<=", "rank", 2],
    //    ["!=", "ramp", 1],
  ],
  layout: layoutRoad,
  source: "openmaptiles",
  minzoom: 5,
  maxzoom: 7,
  metadata: {},
  "source-layer": "transportation",
};

var layerMotorwayInterstate3 = {
  id: "road_motorway_interstate_2",
  type: "line",
  paint: {
    "line-color": "hsla(354, 71%, 88%, 1)",
    "line-width": {
      base: 2.5,
      stops: [
        [6, 0.8],
        [7, 2],
      ],
    },
  },
  filter: [
    "all",
    ["==", "class", "motorway"],
    ["==", "network", "us-interstate"],
    ["==", "rank", 3],
    //    ["!=", "ramp", 1],
  ],
  layout: layoutRoad,
  source: "openmaptiles",
  minzoom: 6,
  maxzoom: 7,
  metadata: {},
  "source-layer": "transportation",
};

var layerTrunk = {
  id: "road_trunk",
  type: "line",
  paint: {
    "line-color": "hsla(354, 15%, 80%, 1)",
    "line-width": {
      base: 2.5,
      stops: [
        [6, 0.8],
        [7, 2],
      ],
    },
  },
  filter: [
    "all",
    ["==", "class", "trunk"],
    ["!=", "ramp", 1],
  ],
  layout: layoutRoad,
  source: "openmaptiles",
  minzoom: 6,
  maxzoom: 7,
  metadata: {},
  "source-layer": "transportation",
};

var layerMotorwayLabel = {
  id: "road_label",
  type: "symbol",
  paint: {
    "text-color": "#333",
    "text-halo-color": "#fff",
    "text-halo-blur": 0.5,
    "text-halo-width": 1,
  },
  filter: ["all", ["==", "class", "motorway"]],
  layout: {
    "text-font": ["Metropolis Light"],
    "text-size": 12,
    "text-field": "{name:latin} {name:nonlatin}",
    "text-anchor": "bottom",
    "text-offset": [0, 0.2],
    "symbol-placement": "line",
  },
  source: "openmaptiles",
  metadata: {},
  "source-layer": "transportation_name",
};
