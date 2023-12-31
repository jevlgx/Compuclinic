export const sparkleCardData = [
  {
    heading: "ENERGY USE",
    money: "250 kw/h",
    perText: "89% compared to average monthly use",
    sparklineData: {
      type: "line",
      data: [500, 225, 476, 267, 190, 250],
      areaStyle: {
        color: "#f79647",
      },
      itemStyle: {
        color: "#f79647",
      },
      symbolSize: 1,
    },
  },
  {
    heading: "LIGHTS",
    money: "6 Lights are ON",
    perText: "5% less than daily average",
    sparklineData: {
      type: "line",
      data: [4, 6, 7, 5, 3, 6],
      areaStyle: {
        color: "#604a7b",
      },
      itemStyle: {
        color: "#604a7b",
      },
      symbolSize: 1,
    },
  },
  {
    heading: "DAILY AVG TEMPRATURE",
    money: "20° C",
    perText: "Outside Avg temprature is 32° C",
    sparklineData: {
      type: "line",
      data: [10, 18, 14, 15, 25, 20],
      areaStyle: {
        color: "#4aacc5",
      },
      itemStyle: {
        color: "#4aacc5",
      },
      symbolSize: 1,
    },
  },
];

export const buttonsIndoor = [
  {
    title: "Kitchen",
    NotConnected: false,
  },
  {
    title: "Dining Room",

    NotConnected: false,
  },
  {
    title: "Living Room",

    NotConnected: false,
  },
  {
    title: "Bed Room",

    NotConnected: true,
  },
  {
    title: "Bath Room",

    NotConnected: false,
  },
  {
    title: "Store Room",

    NotConnected: false,
  },
];

export const buttonsOutdoor = [
  {
    title: "Front Door",
    NotConnected: false,
  },
  {
    title: "Back Door",

    NotConnected: false,
  },
  {
    title: "Pool",

    NotConnected: false,
  },
  {
    title: "Garage",

    NotConnected: false,
  },
  {
    title: "Garden",

    NotConnected: true,
  },
  {
    title: "Main Door",

    NotConnected: false,
  },
];

export const buttonsAppliences = [
  {
    title: "Tv",
    NotConnected: false,
  },
  {
    title: "Apple Tv",

    NotConnected: false,
  },
  {
    title: "Sound Ststem",

    NotConnected: false,
  },
  {
    title: "Air Conditioner",

    NotConnected: false,
  },
  {
    title: "Fridge",

    NotConnected: false,
  },
  {
    title: "Washing Machine",

    NotConnected: false,
  },
];
