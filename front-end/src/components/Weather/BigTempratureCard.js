import React from "react";
import { connect } from "react-redux";

class BigTempratureCard extends React.Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="card weather3">
          <div className="top">
            <div className="wrapper">
              <h2 className="heading">Clear night</h2>
              <h3 className="location">New York, USA</h3>
              <p className="temp">
                <span className="temp-value">23</span>
                <span className="deg">0</span>
                <a>
                  <span className="temp-type">C</span>
                </a>
              </p>
            </div>
          </div>
          <div className="bottom">
            <ul className="forecast">
              <li className="active">
                <span className="date">Yesterday</span>
                <span className="wi wi-day-hail condition">
                  <span className="temp">
                    23<span className="deg">0</span>
                    <span className="temp-type">C</span>
                  </span>
                </span>
              </li>
              <li>
                <span className="date">Tomorrow</span>
                <span className="wi wi-day-hail condition">
                  <span className="temp">
                    21<span className="deg">0</span>
                    <span className="temp-type">C</span>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

BigTempratureCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(BigTempratureCard);
