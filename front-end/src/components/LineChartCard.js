import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as echarts from "echarts";

class LineChartCard extends React.Component {
  componentDidMount() {
    this.chartPlace();
  }
  chartPlace = () => {
    var chartDom = document.getElementById("area_chart");
    var myChart = echarts.init(chartDom);
    var option;
    option = this.props.ChartOption;

    option && myChart.setOption(option);
  };
  render() {
    const { HeaderText, ChartOption } = this.props;
    return (
      <div className="card">
        <div className="header">
          <h2>{HeaderText}</h2>
        </div>
        <div className="body">
          <div id="area_chart" style={{ height: 250 }}></div>
        </div>
      </div>
    );
  }
}

LineChartCard.propTypes = {
  HeaderText: PropTypes.string.isRequired,
  ChartOption: PropTypes.object.isRequired,
};

const mapStateToProps = ({ mailInboxReducer, analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(LineChartCard);
