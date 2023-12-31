import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import DetailsWeatherCard from "../../components/Weather/DetailsWeatherCard";
import TempratureCard from "../../components/Weather/TempratureCard";
import BigTempratureCard from "../../components/Weather/BigTempratureCard";
import WeeklyWeatherCard from "../../components/Weather/WeeklyWeatherCard";

class WidgetsWeather extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        style={{ flex: 1 }}
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Weather"
              Breadcrumb={[
                { name: "Widgets", navigate: "" },
                { name: "Weather", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <DetailsWeatherCard />
              <TempratureCard />
              <BigTempratureCard />
              <WeeklyWeatherCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(WidgetsWeather);
