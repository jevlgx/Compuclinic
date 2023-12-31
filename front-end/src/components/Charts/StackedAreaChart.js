import React from "react";
import { connect } from "react-redux";
import * as echarts from "echarts";
import { optionLineEchart } from "../../Data/Charts";

class StackedAreaChart extends React.Component {
  componentDidMount() {
    this.chartPlace();
  }
  chartPlace = () => {
    var chartDom = document.getElementById("StackedAreaChart");
    var myChart = echarts.init(chartDom);
    var option;
    option = optionLineEchart;

    option && myChart.setOption(option);
  };
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Stacked Area Chart</h2>
          </div>
          <div className="body">
            <div id="StackedAreaChart" style={{ height: 390 }}></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(StackedAreaChart);
