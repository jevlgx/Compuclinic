import React from "react";
import { connect } from "react-redux";
import * as echarts from "echarts";
import { optionAreaEchart } from "../../Data/Charts";

class LargeScaleAreaChart extends React.Component {
  componentDidMount() {
    this.chartPlace();
  }
  chartPlace = () => {
    var chartDom = document.getElementById("largescaleareachart");
    var myChart = echarts.init(chartDom);
    var option;
    option = optionAreaEchart;

    option && myChart.setOption(option);
  };
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Large scale area chart</h2>
          </div>
          <div className="body">
            <div id="largescaleareachart" style={{ height: 250 }}></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(LargeScaleAreaChart);
