import React from "react";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";

class ProfileSliderCard extends React.Component {
  render() {
    const { headerText, subTitle, data, color, qte } = this.props;
    return (
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card">
          <div className="body">
            <ReactEcharts
              option={{
                color: [
                  color ? color : "rgb(89, 196, 188)",
                  "rgb(232, 227, 227)",
                ],
                title: {
                  text: `${qte ? qte : 35}°C`,
                  x: "center",
                  y: "center",
                  textStyle: {
                    color: color ? color : "rgb(89, 196, 188)",
                    fontFamily: "Arial",
                    fontSize: 20,
                    fontWeight: "bolder",
                  },

                  formatter: "{c}",
                },
                grid: {},
                tooltip: {
                  trigger: "item",
                  formatter: " {c} ({d}%)",
                },
                legend: {
                  orient: "vertical",
                  left: 10,
                },
                series: [data],
              }}
              opts={{ renderer: "svg" }}
              style={{ height: "120px" }}
            />
            <h6>{headerText}</h6>
            <span>{subTitle}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(ProfileSliderCard);
