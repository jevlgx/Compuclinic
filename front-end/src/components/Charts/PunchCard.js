import React from "react";
import { connect } from "react-redux";
import * as echarts from "echarts";
import { optionPunchCard } from "../../Data/Charts";

class PunchCard extends React.Component {
  componentDidMount() {
    this.chartPlace();
  }
  chartPlace = () => {
    var chartDom = document.getElementById("PunchCardChart");
    var myChart = echarts.init(chartDom);
    var option;
    option = optionPunchCard;

    option && myChart.setOption(option);
  };
  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="card">
          <div className="header">
            <h2>Punch Card</h2>
          </div>
          <div className="body">
            <div style={{ height: 300 }} id="PunchCardChart"></div>
            {/* <ReactEcharts
                            option={optionPunchCard}
                            opts={{ renderer: 'svg' }} // use svg to render the chart.
                        /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(PunchCard);
