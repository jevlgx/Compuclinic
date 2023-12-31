import React from "react";
import ReactEcharts from "echarts-for-react";

class DemographicCard extends React.Component {
  render() {
    const { Heading, Result, Data } = this.props;
    return (
      <div className="col-lg-3 col-md-6">
        <div className="card info-box-2">
          <div className="body">
            <div className="icon">
              <div className="chart chart-bar">
                <ReactEcharts
                  option={{
                    tooltip: {
                      axisPointer: {
                        type: "shadow",
                      },
                    },

                    grid: {
                      top: 1,
                      bottom: 0,
                      right: 1,
                      left: 0,
                    },
                    xAxis: [
                      {
                        type: "category",
                        boundaryGap: false,
                        axisLine: {
                          show: false,
                        },
                      },
                    ],
                    yAxis: [
                      {
                        type: "value",
                        splitLine: { show: false },
                        axisLine: {
                          show: false,
                        },
                        axisLabel: {
                          show: false,
                        },
                      },
                    ],
                    series: Data,
                  }}
                  opts={{ renderer: "svg" }} // use svg to render the chart.
                  style={{
                    height: 60,
                    width: 70,
                    marginLeft: "5%",
                    marginTop: "10%",
                  }}
                />
              </div>
            </div>
            <div className="content">
              <div className="text">{Heading}</div>
              <div className="number">{Result}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DemographicCard;
