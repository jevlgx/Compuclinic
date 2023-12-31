import React from "react";
import { connect } from "react-redux";

class UIIconsWeatherIcons extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Weather Icons</h2>
        </div>
        <div className="body">
          <div id="sunny">
            <h6>Day / Sunny Icons</h6>
            <div className="row icons-list">
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-cloudy-gusts"></i> wi-day-cloudy-gusts{" "}
              </div>
              <div className="col-md-3 -col-sm-4">
                <i className="wi wi-day-cloudy-gusts"></i> wi-day-cloudy-gusts{" "}
              </div>
              <div className="col-md-3 -col-sm-4">
                <i className="wi wi-day-cloudy-windy"></i> wi-day-cloudy-windy{" "}
              </div>
              <div className="col-md-3 -col-sm-4">
                <i className="wi wi-day-cloudy"></i> wi-day-cloudy{" "}
              </div>
              <div className="col-md-3 -col-sm-4">
                <i className="wi wi-day-fog"></i> wi-day-fog{" "}
              </div>
              <div className="col-md-3 -col-sm-4">
                <i className="wi wi-day-hail"></i> wi-day-hail{" "}
              </div>
              <div className="col-md-3 -col-sm-4">
                <i className="wi wi-day-lightning"></i> wi-day-lightning{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-rain-mix"></i> wi-day-rain-mix{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-rain-wind"></i> wi-day-rain-wind{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-rain"></i> wi-day-rain{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-showers"></i> wi-day-showers{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-snow"></i> wi-day-snow{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-sprinkle"></i> wi-day-sprinkle{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-sunny-overcast"></i>{" "}
                wi-day-sunny-overcast{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-sunny"></i> wi-day-sunny{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-storm-showers"></i> wi-day-storm-showers{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-day-thunderstorm"></i> wi-day-thunderstorm{" "}
              </div>
            </div>
          </div>
          <hr />
          <div id="cloudy">
            <h6>Neutral / Cloudy Icons</h6>
            <div className="row icons-list">
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-cloudy-gusts"></i> wi-cloudy-gusts{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-cloudy-windy"></i> wi-cloudy-windy{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-cloudy"></i> wi-cloudy{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-fog"></i> wi-fog{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-hail"></i> wi-hail{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-lightning"></i> wi-lightning{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-rain-mix"></i> wi-rain-mix{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-rain-wind"></i> wi-rain-wind{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-rain"></i> wi-rain{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-showers"></i> wi-showers{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-snow"></i> wi-snow{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-sprinkle"></i> wi-sprinkle{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-storm-showers"></i> wi-storm-showers{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-thunderstorm"></i> wi-thunderstorm{" "}
              </div>
            </div>
          </div>
          <hr />
          <div id="night">
            <h6>Night / Moons Icons</h6>
            <div className="row icons-list">
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-cloudy-gusts"></i>{" "}
                wi-night-alt-cloudy-gusts{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-cloudy-windy"></i>{" "}
                wi-night-alt-cloudy-windy{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-hail"></i> wi-night-alt-hail{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-lightning"></i>{" "}
                wi-night-alt-lightning{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-rain-mix"></i>{" "}
                wi-night-alt-rain-mix{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-rain-wind"></i>{" "}
                wi-night-alt-rain-wind{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-rain"></i> wi-night-alt-rain{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-showers"></i> wi-night-alt-showers{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-snow"></i> wi-night-alt-snow{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-sprinkle"></i>{" "}
                wi-night-alt-sprinkle{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-storm-showers"></i>{" "}
                wi-night-alt-storm-showers{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-alt-thunderstorm"></i>{" "}
                wi-night-alt-thunderstorm{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-clear"></i> wi-night-clear{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-cloudy-gusts"></i>{" "}
                wi-night-cloudy-gusts{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-cloudy-windy"></i>{" "}
                wi-night-cloudy-windy{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-cloudy"></i> wi-night-cloudy{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-hail"></i> wi-night-hail{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-lightning"></i> wi-night-lightning{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-rain-mix"></i> wi-night-rain-mix{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-rain-wind"></i> wi-night-rain-wind{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-rain"></i> wi-night-rain{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-showers"></i> wi-night-showers{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-snow"></i> wi-night-snow{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-sprinkle"></i> wi-night-sprinkle{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-storm-showers"></i>{" "}
                wi-night-storm-showers{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-thunderstorm"></i>{" "}
                wi-night-thunderstorm{" "}
              </div>
            </div>
          </div>
          <hr />
          <div id="misc">
            <h6>Miscellaneous Icons</h6>
            <div className="row icons-list">
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-celsius"></i> wi-celsius{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-cloud-down"></i> wi-cloud-down{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-cloud-refresh"></i> wi-cloud-refresh{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-cloud-up"></i> wi-cloud-up{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-cloud"></i> wi-cloud{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-degrees"></i> wi-degrees{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-down-left"></i> wi-down-left{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-down"></i> wi-down{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-fahrenheit"></i> wi-fahrenheit{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-horizon-alt"></i> wi-horizon-alt{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-horizon"></i> wi-horizon{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-left"></i> wi-left{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-lightning"></i> wi-lightning{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-night-fog"></i> wi-night-fog{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-refresh-alt"></i> wi-refresh-alt{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-refresh"></i> wi-refresh{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-right"></i> wi-right{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-sprinkles"></i> wi-sprinkles{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-strong-wind"></i> wi-strong-wind{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-sunrise"></i> wi-sunrise{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-sunset"></i> wi-sunset{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-thermometer-exterior"></i>{" "}
                wi-thermometer-exterior{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-thermometer-internal"></i>{" "}
                wi-thermometer-internal{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-thermometer"></i> wi-thermometer{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-tornado"></i> wi-tornado{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-up-right"></i> wi-up-right{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-up"></i> wi-up{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-wind-east"></i> wi-wind-east{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-wind-north-east"></i> wi-wind-north-east{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-wind-north-west"></i> wi-wind-north-west{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-wind-north"></i> wi-wind-north{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-wind-south-east"></i> wi-wind-south-east{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-wind-south-west"></i> wi-wind-south-west{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-wind-south"></i> wi-wind-south{" "}
              </div>
              <div className="col-md-3 col-sm-4">
                <i className="wi wi-wind-west"></i> wi-wind-west{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIIconsWeatherIcons);
