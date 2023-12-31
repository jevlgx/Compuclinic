import React from "react";
import { connect } from "react-redux";
import * as echarts from "echarts";
import { optionPieEchart } from "../../Data/Charts";

class PieChart extends React.Component {
  componentDidMount() {
    this.chartPlace();
  }
  chartPlace = () => {
    var chartDom = document.getElementById("PieChart");
    var myChart = echarts.init(chartDom);
    var option;
    option = optionPieEchart;

    option && myChart.setOption(option);
  };
  render() {
    return (
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="card">
          <div className="header">
            <h2>Pie Chart</h2>
          </div>
          <div className="body">
            <div id="PieChart" style={{ height: 300 }}></div>
            {/* <ReactEcharts
                        option={optionPieEchart}
                        opts={{renderer: 'svg'}} // use svg to render the chart.
                    /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(PieChart);
