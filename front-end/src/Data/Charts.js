export const optionLineEchart = {
  title: {
    text: "",
  },
  color: ["#20c997", "#e83e8c", "#6f42c1", "#ffc107", "#007bff"],
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
      label: {
        backgroundColor: "#6a7985",
      },
    },
  },
  legend: {
    data: [
      "Email Marketing",
      "Alliance advertising",
      "Video ad",
      "Direct interview",
      "Search engine",
    ],
  },
  toolbox: {
    // feature: {
    //     saveAsImage: {}
    // }
  },
  grid: {
    left: "3%",
    right: "1%",
    bottom: "2%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      axisLabel: {
        color: "rgba(0,0,0,0.4)",
      },
      axisLine: {
        lineStyle: {
          color: "rgba(0,0,0,0.5)",
        },
      },
      data: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thersday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        color: "rgba(0,0,0,0.4)",
      },
      axisLine: {
        lineStyle: {
          color: "rgba(0,0,0,0.5)",
        },
      },
      splitLine: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "Email Marketing",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "Alliance advertising",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "Video ad",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: "Direct interview",
      type: "line",
      stack: "总量",
      areaStyle: {},
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: "Search engine",
      type: "line",
      stack: "总量",
      label: {
        normal: {
          show: true,
          position: "top",
        },
      },
      areaStyle: {},
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};

export const optionPieEchart = {
  title: {
    text: "User access source",
    subtext: "Purely fictitious",
    left: "center",
  },
  color: ["#20c997", "#e83e8c", "#6f42c1", "#ffc107", "#007bff"],
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: [
      "Email Marketing",
      "Alliance advertising",
      "Video ad",
      "Direct interview",
      "Search engine",
    ],
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Email Marketing" },
        { value: 310, name: "Alliance advertising" },
        { value: 234, name: "Video ad" },
        { value: 135, name: "Direct interview" },
        { value: 1548, name: "Search engine" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

var hours = [
  "12a",
  "1a",
  "2a",
  "3a",
  "4a",
  "5a",
  "6a",
  "7a",
  "8a",
  "9a",
  "10a",
  "11a",
  "12p",
  "1p",
  "2p",
  "3p",
  "4p",
  "5p",
  "6p",
  "7p",
  "8p",
  "9p",
  "10p",
  "11p",
];
var days = [
  "Saturday",
  "Friday",
  "Thursday",
  "Wednesday",
  "Tuesday",
  "Monday",
  "Sunday",
];

var data = [
  [0, 0, 5],
  [0, 1, 1],
  [0, 2, 0],
  [0, 3, 0],
  [0, 4, 0],
  [0, 5, 0],
  [0, 6, 0],
  [0, 7, 0],
  [0, 8, 0],
  [0, 9, 0],
  [0, 10, 0],
  [0, 11, 2],
  [0, 12, 4],
  [0, 13, 1],
  [0, 14, 1],
  [0, 15, 3],
  [0, 16, 4],
  [0, 17, 6],
  [0, 18, 4],
  [0, 19, 4],
  [0, 20, 3],
  [0, 21, 3],
  [0, 22, 2],
  [0, 23, 5],
  [1, 0, 7],
  [1, 1, 0],
  [1, 2, 0],
  [1, 3, 0],
  [1, 4, 0],
  [1, 5, 0],
  [1, 6, 0],
  [1, 7, 0],
  [1, 8, 0],
  [1, 9, 0],
  [1, 10, 5],
  [1, 11, 2],
  [1, 12, 2],
  [1, 13, 6],
  [1, 14, 9],
  [1, 15, 11],
  [1, 16, 6],
  [1, 17, 7],
  [1, 18, 8],
  [1, 19, 12],
  [1, 20, 5],
  [1, 21, 5],
  [1, 22, 7],
  [1, 23, 2],
  [2, 0, 1],
  [2, 1, 1],
  [2, 2, 0],
  [2, 3, 0],
  [2, 4, 0],
  [2, 5, 0],
  [2, 6, 0],
  [2, 7, 0],
  [2, 8, 0],
  [2, 9, 0],
  [2, 10, 3],
  [2, 11, 2],
  [2, 12, 1],
  [2, 13, 9],
  [2, 14, 8],
  [2, 15, 10],
  [2, 16, 6],
  [2, 17, 5],
  [2, 18, 5],
  [2, 19, 5],
  [2, 20, 7],
  [2, 21, 4],
  [2, 22, 2],
  [2, 23, 4],
  [3, 0, 7],
  [3, 1, 3],
  [3, 2, 0],
  [3, 3, 0],
  [3, 4, 0],
  [3, 5, 0],
  [3, 6, 0],
  [3, 7, 0],
  [3, 8, 1],
  [3, 9, 0],
  [3, 10, 5],
  [3, 11, 4],
  [3, 12, 7],
  [3, 13, 14],
  [3, 14, 13],
  [3, 15, 12],
  [3, 16, 9],
  [3, 17, 5],
  [3, 18, 5],
  [3, 19, 10],
  [3, 20, 6],
  [3, 21, 4],
  [3, 22, 4],
  [3, 23, 1],
  [4, 0, 1],
  [4, 1, 3],
  [4, 2, 0],
  [4, 3, 0],
  [4, 4, 0],
  [4, 5, 1],
  [4, 6, 0],
  [4, 7, 0],
  [4, 8, 0],
  [4, 9, 2],
  [4, 10, 4],
  [4, 11, 4],
  [4, 12, 2],
  [4, 13, 4],
  [4, 14, 4],
  [4, 15, 14],
  [4, 16, 12],
  [4, 17, 1],
  [4, 18, 8],
  [4, 19, 5],
  [4, 20, 3],
  [4, 21, 7],
  [4, 22, 3],
  [4, 23, 0],
  [5, 0, 2],
  [5, 1, 1],
  [5, 2, 0],
  [5, 3, 3],
  [5, 4, 0],
  [5, 5, 0],
  [5, 6, 0],
  [5, 7, 0],
  [5, 8, 2],
  [5, 9, 0],
  [5, 10, 4],
  [5, 11, 1],
  [5, 12, 5],
  [5, 13, 10],
  [5, 14, 5],
  [5, 15, 7],
  [5, 16, 11],
  [5, 17, 6],
  [5, 18, 0],
  [5, 19, 5],
  [5, 20, 3],
  [5, 21, 4],
  [5, 22, 2],
  [5, 23, 0],
  [6, 0, 1],
  [6, 1, 0],
  [6, 2, 0],
  [6, 3, 0],
  [6, 4, 0],
  [6, 5, 0],
  [6, 6, 0],
  [6, 7, 0],
  [6, 8, 0],
  [6, 9, 0],
  [6, 10, 1],
  [6, 11, 0],
  [6, 12, 2],
  [6, 13, 1],
  [6, 14, 3],
  [6, 15, 4],
  [6, 16, 0],
  [6, 17, 0],
  [6, 18, 0],
  [6, 19, 0],
  [6, 20, 1],
  [6, 21, 2],
  [6, 22, 2],
  [6, 23, 6],
];

export const optionPunchCard = {
  title: {
    text: "Punch Card of Github",
    link: "https://github.com/pissang/echarts-next/graphs/punch-card",
  },
  legend: {
    data: ["Punch Card"],
    left: "right",
  },
  polar: {},
  tooltip: {
    formatter: function (params) {
      return (
        params.value[2] +
        " commits in " +
        hours[params.value[1]] +
        " of " +
        days[params.value[0]]
      );
    },
  },
  angleAxis: {
    type: "category",
    data: hours,
    boundaryGap: false,
    splitLine: {
      show: true,
      lineStyle: {
        color: "#999",
        type: "dashed",
      },
    },
    axisLine: {
      show: false,
    },
  },
  radiusAxis: {
    type: "category",
    data: days,
    axisLine: {
      show: false,
    },
    axisLabel: {
      rotate: 45,
    },
  },
  series: [
    {
      name: "Punch Card",
      type: "scatter",
      coordinateSystem: "polar",
      symbolSize: function (val) {
        return val[2] * 2;
      },
      data: data,
      animationDelay: function (idx) {
        return idx * 5;
      },
    },
  ],
};

var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 300];

for (var i = 1; i < 20000; i++) {
  var now = new Date((base += oneDay));
  date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join("/"));
  var value = Math.round((Math.random() - 0.5) * 20 + data[i - 1]);
  if (value < 0) {
    value = value * -1;
  }
  data.push(value);
}

export const optionAreaEchart = {
  tooltip: {
    trigger: "axis",
    position: function (pt) {
      return [pt[0], "10%"];
    },
  },
  title: {
    left: "center",
    text: "",
  },
  grid: {
    top: 10,
    left: 45,
    right: 35,
  },
  toolbox: {
    show: false,
    feature: {
      dataZoom: {
        yAxisIndex: "none",
      },
      restore: {},
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: date,
  },
  yAxis: {
    type: "value",
    boundaryGap: [0, "100%"],
  },
  dataZoom: [
    {
      type: "inside",
      start: 80,
      end: 90,
    },
    {
      start: 0,
      end: 10,
      handleIcon:
        "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z",
      handleSize: "80%",
      handleStyle: {
        color: "#fff",
        shadowBlur: 3,
        shadowColor: "rgba(0, 0, 0, 0.6)",
        shadowOffsetX: 2,
        shadowOffsetY: 2,
      },
    },
  ],
  series: [
    {
      name: "simulation data",
      type: "line",
      smooth: true,
      symbol: "none",
      sampling: "average",
      itemStyle: {
        color: "rgb(255, 70, 131)",
      },
      areaStyle: {
        color:
          (0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: "rgba(255, 158, 68,0.2)",
            },
            {
              offset: 1,
              color: "rgba(255, 70, 131)",
            },
          ]),
      },
      data: data,
    },
  ],
};

export const ProfileSliderData = [
  {
    headerText: "Events",
    subTitle: "12 of this month",
    data: {
      name: "访问来源",
      type: "pie",
      clockWise: 1,
      startAngle: 90,
      radius: [35, 38],
      itemStyle: {
        normal: {
          label: { show: false },
          labelLine: { show: false },
        },
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: "30",
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [{ value: 65 }, { value: 35 }],
    },
  },
  // {
  //   headerText: "Birthday",
  //   subTitle: "4 of this month",
  //   color: "rgb(33, 150, 243)",
  //   data: {
  //     name: "访问来源",
  //     type: "pie",
  //     clockWise: 1,
  //     startAngle: 90,
  //     radius: [35, 38],
  //     itemStyle: {
  //       normal: {
  //         label: { show: false },
  //         labelLine: { show: false },
  //       },
  //     },
  //     label: {
  //       show: false,
  //       position: "center",
  //     },
  //     emphasis: {
  //       label: {
  //         show: true,
  //         fontSize: "30",
  //         fontWeight: "bold",
  //       },
  //     },
  //     labelLine: {
  //       show: false,
  //     },
  //     data: [{ value: 33 }, { value: 67 }],
  //   },
  // },
  // {
  //   headerText: "Conferences",
  //   subTitle: "8 of this month",
  //   color: "rgb(244, 67, 54)",
  //   data: {
  //     name: "访问来源",
  //     type: "pie",
  //     clockWise: 1,
  //     startAngle: 90,
  //     radius: [35, 38],
  //     itemStyle: {
  //       normal: {
  //         label: { show: false },
  //         labelLine: { show: false },
  //       },
  //     },
  //     label: {
  //       show: false,
  //       position: "center",
  //     },
  //     emphasis: {
  //       label: {
  //         show: true,
  //         fontSize: "30",
  //         fontWeight: "bold",
  //       },
  //     },
  //     labelLine: {
  //       show: false,
  //     },
  //     data: [{ value: 65 }, { value: 35 }],
  //   },
  // },
  // {
  //   headerText: "Seminars",
  //   subTitle: "2 of this month",
  //   color: "rgb(76, 175, 80)",
  //   data: {
  //     name: "访问来源",
  //     type: "pie",
  //     clockWise: 1,
  //     startAngle: 90,
  //     radius: [35, 38],
  //     itemStyle: {
  //       normal: {
  //         label: { show: false },
  //         labelLine: { show: false },
  //       },
  //     },
  //     label: {
  //       show: false,
  //       position: "center",
  //     },
  //     emphasis: {
  //       label: {
  //         show: true,
  //         fontSize: "30",
  //         fontWeight: "bold",
  //       },
  //     },
  //     labelLine: {
  //       show: false,
  //     },
  //     data: [{ value: 65 }, { value: 35 }],
  //   },
  // },
];
