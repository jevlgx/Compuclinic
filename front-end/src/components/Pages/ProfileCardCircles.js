import React from "react";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";

class ProfileSliderCard extends React.Component {
  render() {
    const { headerText, subTitle, data, color } = this.props;
    return (
      <div className="row clearfix text-center">
        <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card">
                <div className="body">
                    <div style="display:inline;width:70px;height:70px;"><canvas style="width: 70px; height: 70px;" width="87" height="87"></canvas><input type="text" className="knob" value="22" data-width="70" data-height="70" data-thickness="0.1" data-fgcolor="#01b2c6" style="width: 39px; height: 23px; position: absolute; vertical-align: middle; margin-top: 23px; margin-left: -54px; border: 0px none; background: none; font: bold 14px Arial; text-align: center; color: rgb(1, 178, 198); padding: 0px; appearance: none;"/></div>
                    <h6>Events</h6>
                    <span>12 of this month</span>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(ProfileSliderCard);
