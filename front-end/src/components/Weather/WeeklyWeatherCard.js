import React from "react";
import { connect } from "react-redux";

class WeeklyWeatherCard extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card weather">
          <div className="header">
            <h2>Weather</h2>
          </div>
          <div className="body">
            <div className="city">
              <span>sky is clear</span>
              <h3>New York</h3>
              <i className="wi wi-day-sunny-overcast"></i>
            </div>
            <ul className="row days list-unstyled m-b-0">
              <li>
                <h5>SUN</h5>
                <i className="wi wi-rain"></i>
                <span className="degrees">77</span>
              </li>
              <li>
                <h5>MON</h5>
                <i className="wi wi-cloudy"></i>
                <span className="degrees">81</span>
              </li>
              <li>
                <h5>TUE</h5>
                <i className="wi wi-rain-wind"></i>
                <span className="degrees">82</span>
              </li>
              <li>
                <h5>WED</h5>
                <i className="wi wi-lightning"></i>
                <span className="degrees">82</span>
              </li>
              <li>
                <h5>THU</h5>
                <i className="wi wi-day-cloudy-gusts"></i>
                <span className="degrees">81</span>
              </li>
              <li>
                <h5>FRI</h5>
                <i className="wi wi-day-showers"></i>
                <span className="degrees">67</span>
              </li>
              <li>
                <h5>SAT</h5>
                <i className="wi wi-day-snow"></i>
                <span className="degrees">81</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

WeeklyWeatherCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(WeeklyWeatherCard);
