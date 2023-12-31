import React from "react";
import { connect } from "react-redux";
import { VectorMap } from "react-jvectormap";
import * as echarts from "echarts";
import DemographicCard from "../../components/DemographicCard";
import PageHeader from "../../components/PageHeader";
import {
  demographicTopCardData,
  genderOverViewOption,
  browserUsageOption,
} from "../../Data/DemographicData";
import {
  onPressSiteVisitorDropDown,
  onPressGenderOverviewDropDown,
  onPressBrowserUsageDropDown,
} from "../../actions";
import { Dropdown } from "react-bootstrap";

class Demographic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "456",
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.chartPlace();
    this.chartPlace1();
  }
  chartPlace = () => {
    var chartDom = document.getElementById("m_area_chart");
    var myChart = echarts.init(chartDom);
    var option;
    option = genderOverViewOption;

    option && myChart.setOption(option);
  };
  chartPlace1 = () => {
    var chartDom = document.getElementById("donut_chart");
    var myChart = echarts.init(chartDom);
    var option;
    option = browserUsageOption;

    option && myChart.setOption(option);
  };
  render() {
    const {
      isSiteVisitorDropDown,
      isGenderOverviewDropDown,
      isBrowserUsageDropDown,
    } = this.props;

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
              HeaderText="Dashboard"
              Breadcrumb={[{ name: "Demographic" }]}
            />

            <div className="row clearfix">
              {demographicTopCardData.map((data) => {
                return (
                  <DemographicCard
                    key={data.heading}
                    Heading={data.heading}
                    Result={data.result}
                    Data={data.sparklineData}
                  />
                );
              })}
            </div>

            <div className="row clearfix">
              <div className="col-md-12">
                <div className="card visitors-map">
                  <div className="header">
                    <h2>Site Visitors</h2>
                    <Dropdown as="ul" className="header-dropdown">
                      <Dropdown.Toggle
                        variant="success"
                        as="li"
                        id="dropdown-basic"
                      >
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <li>
                            <a>Action</a>
                          </li>
                          <li>
                            <a>Another Action</a>
                          </li>
                          <li>
                            <a>Something else</a>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown.Toggle>
                    </Dropdown>
                  </div>
                  <div className="body">
                    <div className="row">
                      <div className="col-lg-8 col-md-12">
                        <div id="world-map-markers" style={{ height: "300px" }}>
                          {/* <MapChart setTooltipContent={(e) => { this.setState({ content: e }) }} style={{ height: '100%' }} />
                                                    <ReactTooltip>{this.state.content}</ReactTooltip> */}
                          <VectorMap
                            map={"world_mill"}
                            height={300}
                            backgroundColor="#fff"
                            regionStyle={{
                              height: "300",
                              initial: {
                                height: 300,
                                fill: "rgba(0,0,0,0.25)",
                              },
                            }}
                            ref="map"
                            markers={{
                              US: {
                                latLng: [38.9, -98.45],
                                name: "Name of City",
                              },
                              IN: { latLng: [28.7041, 77.1025], name: "delhi" },
                            }}
                            markerStyle={{
                              initial: {
                                fill: "#F53",
                              },
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <ul className="list-unstyled">
                          <li>
                            <div className="progress-container progress-info m-b-25">
                              <span className="progress-badge">
                                Visitors From USA
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "78%" }}
                                >
                                  <span className="progress-value">78%</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="progress-container progress-primary m-b-25">
                              <span className="progress-badge">
                                Visitors From India
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "53%" }}
                                >
                                  <span className="progress-value">53%</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="progress-container progress-warning m-b-25">
                              <span className="progress-badge">
                                Visitors From Europe
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "31%" }}
                                >
                                  <span className="progress-value">31%</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="progress-container progress-success m-b-25">
                              <span className="progress-badge">
                                Visitors From Australia
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "27%" }}
                                >
                                  <span className="progress-value">27%</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="progress-container">
                              <span className="progress-badge">
                                Visitors From UAE
                              </span>
                              <div className="progress">
                                <div
                                  className="progress-bar"
                                  role="progressbar"
                                  aria-valuenow="60"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                  style={{ width: "15%" }}
                                >
                                  <span className="progress-value">15%</span>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="header">
                    <h2>Gender Overview</h2>
                    <Dropdown as="ul" className="header-dropdown">
                      <Dropdown.Toggle
                        variant="success"
                        as="li"
                        id="dropdown-basic"
                      >
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <li>
                            <a>Action</a>
                          </li>
                          <li>
                            <a>Another Action</a>
                          </li>
                          <li>
                            <a>Something else</a>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown.Toggle>
                    </Dropdown>
                  </div>
                  <div className="body gender-overview">
                    <h5>
                      <span className="m-r-50">
                        <i className="fa fa-male m-r-10"></i> 2,21,598
                      </span>
                      <span>
                        <i className="fa fa-female m-r-10"></i>1,00,215
                      </span>
                    </h5>
                    <div id="m_area_chart" style={{ height: 300 }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row clearfix">
              <div className="col-lg-6 col-md-12">
                <div className="card weather2">
                  <div className="body city-selected">
                    <div className="row">
                      <div className="col-12">
                        <div className="city">
                          <span>City:</span> San Francisco
                        </div>
                        <div className="night">Day - 12:07 PM</div>
                      </div>
                      <div className="info col-7">
                        <div className="temp">
                          <h2>34°</h2>
                        </div>
                      </div>
                      <div className="icon col-5">
                        <i className="wi wi-day-cloudy-windy"></i>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped m-b-0">
                    <tbody>
                      <tr>
                        <td>Land area</td>
                        <td className="font-medium">121.4 km²</td>
                      </tr>
                      <tr>
                        <td>Humidity</td>
                        <td className="font-medium">73%</td>
                      </tr>
                      <tr>
                        <td>Pressure</td>
                        <td className="font-medium">25.56 in</td>
                      </tr>
                      <tr>
                        <td>Population</td>
                        <td className="font-medium">8.65 lakhs</td>
                      </tr>
                      <tr>
                        <td>Ceiling</td>
                        <td className="font-medium">25280 ft</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item text-center active">
                        <div className="col-12">
                          <ul className="row days-list list-unstyled">
                            <li className="day col-4">
                              <p>Monday</p>
                              <i className="wi wi-day-hail"></i>
                            </li>
                            <li className="day col-4">
                              <p>Tuesday</p>
                              <i className="wi wi-day-lightning"></i>
                            </li>
                            <li className="day col-4">
                              <p>Wednesday</p>
                              <i className="wi wi-day-storm-showers"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="carousel-item text-center">
                        <div className="col-12">
                          <ul className="row days-list list-unstyled">
                            <li className="day col-4">
                              <p>Thursday</p>
                              <i className="wi wi-day-hail"></i>
                            </li>
                            <li className="day col-4">
                              <p>Friday</p>
                              <i className="wi wi-showers"></i>
                            </li>
                            <li className="day col-4">
                              <p>Saturday</p>
                              <i className="wi wi-day-sunny"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="header">
                    <h2>Browser Usage</h2>
                    <Dropdown as="ul" className="header-dropdown">
                      <Dropdown.Toggle
                        variant="success"
                        as="li"
                        id="dropdown-basic"
                      >
                        <Dropdown.Menu
                          as="ul"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <li>
                            <a>Action</a>
                          </li>
                          <li>
                            <a>Another Action</a>
                          </li>
                          <li>
                            <a>Something else</a>
                          </li>
                        </Dropdown.Menu>
                      </Dropdown.Toggle>
                    </Dropdown>
                  </div>
                  <div className="body text-center">
                    <div
                      id="donut_chart"
                      className="dashboard-donut-chart m-b-35"
                      style={{ height: 370 }}
                    ></div>
                    <div className="row">
                      <div className="col-lg-2 col-4">
                        <h6>Crome</h6>
                        <p>
                          35<sup>%</sup>
                        </p>
                      </div>
                      <div className="col-lg-2 col-4">
                        <h6>Safari</h6>
                        <p>
                          25<sup>%</sup>
                        </p>
                      </div>
                      <div className="col-lg-2 col-4">
                        <h6>Mozila</h6>
                        <p>
                          25<sup>%</sup>
                        </p>
                      </div>
                      <div className="col-lg-2 col-4">
                        <h6>Opera</h6>
                        <p>
                          3<sup>%</sup>
                        </p>
                      </div>
                      <div className="col-lg-2 col-4">
                        <h6>IE</h6>
                        <p>
                          7<sup>%</sup>
                        </p>
                      </div>
                      <div className="col-lg-2 col-4">
                        <h6>Others</h6>
                        <p>
                          5<sup>%</sup>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ demographicReducer }) => ({
  isSiteVisitorDropDown: demographicReducer.isSiteVisitorDropDown,
  isGenderOverviewDropDown: demographicReducer.isGenderOverviewDropDown,
  isBrowserUsageDropDown: demographicReducer.isBrowserUsageDropDown,
});

export default connect(mapStateToProps, {
  onPressSiteVisitorDropDown,
  onPressGenderOverviewDropDown,
  onPressBrowserUsageDropDown,
})(Demographic);
