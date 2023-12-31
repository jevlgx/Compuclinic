export const demographicTopCardData = [
  {
    heading: "Population",
    result: "4,254",
    sparklineData: {
      type: "bar",
      data: [6, 4, 8, 6, 8, 10, 5, 6, 7, 9, 5],

      itemStyle: {
        color: "#d1cd49",
      },
      symbolSize: 1,
      barWidth: 4,
    },
  },
  {
    heading: "Usage",
    result: "98%",
    sparklineData: {
      type: "pie",
      data: [30, 35, 25, 8],
      label: {
        normal: {
          show: false,
        },
      },
      lableLine: {
        normal: {
          show: false,
        },
      },
    },
  },
  {
    heading: "Page Views",
    result: "1,195",
    sparklineData: [
      {
        type: "bar",
        data: [4, 6, 0, 0, 2, 0, 4, 3, 6, 7, 0, 3],
        itemStyle: {
          color: "#d1cd49",
        },
        symbolSize: 1,
        barWidth: 4,
      },
      {
        type: "bar",
        data: [0, 0, -3, -1, 0, -2, 0, 0, 0, 0, -2, 0],

        itemStyle: {
          color: "#d93f3f",
        },
        symbolSize: 1,
        barWidth: 4,
      },
    ],
  },
  {
    heading: "Growth",
    result: "$1,243",
    sparklineData: {
      type: "line",
      data: [9, 4, 6, 5, 6, 4, 7, 3],

      itemStyle: {
        color: "#d93f3f",
      },
      symbolSize: 1,
      barWidth: 4,
    },
  },
];

export const genderOverViewOption = {
  tooltip: {
    trigger: "axis",
  },
  grid: {
    top: "4%",
    left: "1%",
    right: "1%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      boundaryGap: false,
      data: [2012, 2013, 2014, 2015, 2016, 2017, 2018],
      axisLine: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: "#a9a9a9",
        },
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#E0E6F1"],
        },
      },

      axisLine: {
        show: false,
      },
      axisLabel: {
        formatter: function (value, index) {
          if (value > 0) {
            return value;
          } else {
            return 0;
          }
        },
        textStyle: {
          color: "#a9a9a9",
        },
      },
    },
  ],
  series: [
    {
      type: "line",
      name: "Male",
      data: [1025, 1580, 4581, 2015, 5210, 3100, 9561],
      itemStyle: {
        color: "#6ebdd1",
      },
      symbolSize: 8,
      smooth: true,
    },
    {
      type: "line",
      name: "Female",
      data: [780, 2660, 1789, 3154, 2154, 2100, 6315],
      itemStyle: {
        color: "#f4516c",
      },
      symbolSize: 8,
      smooth: true,
    },
  ],
};

export const browserUsageOption = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b}: {c} ({d}%)",
  },
  series: [
    {
      type: "pie",
      radius: ["72%", "92%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: "center",
        },
        emphasis: {
          show: true,
          textStyle: {
            fontSize: "28",
            fontWeight: "bold",
            color: "#000",
          },
          formatter: "{b}\n{d}%",
        },
      },
      labelLine: {
        normal: {
          show: false,
        },
      },
      itemStyle: [{ color: "#ebcf34" }, { color: "#f4516c" }],
      data: [
        {
          value: 35,
          name: "Chome",
          itemStyle: { color: "#ebcf34" },
        },
        { value: 25, name: "Safari", itemStyle: { color: "#05b6e3" } },
        { value: 25, name: "Mozila", itemStyle: { color: "#e3a405" } },
        { value: 3, name: "Opera" },
        { value: 7, name: "IE", itemStyle: { color: "#69e2fa" } },
        { value: 5, name: "Other" },
      ],
    },
  ],
};
