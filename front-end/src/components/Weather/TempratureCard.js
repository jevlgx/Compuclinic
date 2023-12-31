import React from "react";
import { connect } from "react-redux";

class TempratureCard extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="card weather4">
          <div className="body">
            <div className="row">
              <div className="col-6">
                <i className="wi wi-day-sunny"></i>
                <p>City</p>
              </div>
              <div className="col-6 text-right">
                <h3 className="">
                  27° <span>C</span>
                </h3>
                <span>Fri 20/5</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card weather5">
          <div className="widget">
            <div className="weatherIcon">
              <i className="wi wi wi-day-cloudy"></i>
            </div>
            <div className="weatherInfo">
              <div className="temperature">
                <span>25°</span>
              </div>
              <div className="description">
                <div className="weatherCondition">CLOUDY</div>
                <div className="place">New York, USA</div>
              </div>
            </div>
            <div className="date">1st Jun</div>
          </div>
        </div>
        <div className="card weather6 l-amber">
          <div className="body">
            <div className="p-15">
              <div className="temp">
                27°<span>C</span>
                <i className="wi wi-day-cloudy-windy"></i>
              </div>
            </div>
            <p>Saturday 12 May</p>
          </div>
        </div>
      </div>
    );
  }
}

TempratureCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(TempratureCard);
