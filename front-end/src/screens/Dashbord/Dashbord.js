import React from "react";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";
import "echarts-gl";
import echarts from "echarts";
import LogoiCON from "../../assets/images/logo-icon.svg";
import AwsomeImage from "../../assets/images/blog/blog-page-4.jpg";
import AwsomeImageOt from "../../assets/images/blog/blog-page-2.jpg";
import { Dropdown } from "react-bootstrap";
import ReferralsCard from "../../components/Dashboard/ReferralsCard";
import ResentChat from "../../components/Dashboard/ResentChat";
import TwitterFeedCard from "../../components/Dashboard/TwitterFeedCard";
import FeedCards from "../../components/Dashboard/FeedsCard";
import PageHeader from "../../components/PageHeader";
import {
  topProductOption,
  topRevenueOption,
  topRevenueMonthlyOption,
  saleGaugeOption,
  dataManagetOption,
  sparkleCardData,
} from "../../Data/DashbordData";
import {
  toggleMenuArrow,
  onPressTopProductDropDown,
  loadSparcleCard,
  onPressReferralsDropDown,
  onPressRecentChatDropDown,
  onPressDataManagedDropDown,
  facebookProgressBar,
  twitterProgressBar,
  affiliatesProgressBar,
  searchProgressBar,
} from "../../actions";
import SparkleCard from "../../components/SparkleCard";
import { wapp } from "../../Data/Consts";

var timer = null;
class Dashbord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadDataCard();
    this.setState({
      cardData: [...sparkleCardData],
    });

    this.chartPlace();
  }

  chartPlace = () => {
    var chartDom = document.getElementById("topsaleDonut");
    var myChart = echarts.init(chartDom);
    var option;
    option = saleGaugeOption;

    option && myChart.setOption(option);
  };
  async loadDataCard() {
    const { cardData } = this.state;
    var allCardData = cardData;
    cardData.map((data, i) => {
      var uData = [];
      data.sparklineData.data.map((d, j) => {
        uData[j] = Math.floor(Math.random() * 10) + 1;
      });
      allCardData[i].sparklineData.data = [...uData];
    });
    this.setState({ cardData: [...allCardData] });
  }

  render() {
    const { loadingPage } = this.props;
    const { cardData } = this.state;
    if (loadingPage) {
      return (
        <div className="page-loader-wrapper">
          <div className="loader">
            <div className="m-t-30">
              <img src={LogoiCON} width="48" height="48" alt="Compuclinic" />
            </div>
            <p>Please wait...</p>
          </div>
        </div>
      );
    }
    return (
      <div
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Dashboard"
              Breadcrumb={[
                { name: "Dashboard", navigate: `${wapp.DASHBOARD}` }
              ]}
            />
            <div className="row clearfix">
              {cardData.map((data, i) => (
                <SparkleCard
                  index={i}
                  key={data.heading}
                  Heading={data.heading}
                  Money={data.money}
                  PerText={data.perText}
                  isRandomUpdate={true}
                  // Data={data.sparklineData}
                  mainData={data.sparklineData.data}
                  chartColor={data.sparklineData.areaStyle.color}
                  ContainerClass="col-lg-3 col-md-6 col-sm-6"
                />
              ))}
            </div>

            <div className="row clearfix">
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="header">
                    <h2>Patient Statistics</h2>
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
                    <ReactEcharts
                      option={topProductOption}
                      opts={{ renderer: "svg" }} // use svg to render the chart.
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <ReferralsCard />
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="card">
                  <div className="header">
                    <h2>Bed Occupancy</h2>
                    {/* <Dropdown as="ul" className="header-dropdown">
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
                    </Dropdown> */}
                  </div>
                  <div className="body text-center">
                    <h4 className="margin-0">Total Sale</h4>
                    <div
                      id="topsaleDonut"
                      style={{ height: 125, width: "100%" }}
                    ></div>
                    <ReactEcharts
                      option={topRevenueOption}
                      opts={{ renderer: "svg" }}
                      style={{
                        height: "35px",
                        marginLeft: "35%",
                        marginRight: "35%",
                        bottom: 0,
                        top: 0,
                      }} // use svg to render the chart.
                    />
                    <h6 className="p-b-15">Weekly Earnings</h6>
                    <div className="sparkline">
                      <ReactEcharts
                        option={topRevenueMonthlyOption}
                        opts={{ renderer: "svg" }} // use svg to render the chart.
                        style={{
                          height: "35px",
                          marginLeft: "25%",
                          marginRight: "25%",
                          bottom: 0,
                          top: 0,
                        }}
                      />
                    </div>
                    <h6>Monthly Earnings</h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="row clearfix">
              {/* <div className="col-lg-4 col-md-12">
                <ResentChat />
              </div> */}
              <div className="col-lg-12 col-md-12">
                <div className="card">
                  <div className="header">
                    <h2>Last Admissions</h2>
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
                      <div className="col-md-6">
                        <h2>{36}</h2>
                        <p>Interned Patients</p>
                      </div>
                      <div className="col-md-6">
                        <div className="sparkline m-b-20">
                          <ReactEcharts
                            option={dataManagetOption}
                            opts={{ renderer: "svg" }}
                            style={{
                              height: "70px",
                              width: "180px",
                              marginLeft: "30%",
                              bottom: 0,
                            }} // use svg to render the chart.
                          />
                        </div>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover m-b-0">
                        <tbody>
                          <tr>
                            <th>
                              <i className="fa fa-circle text-success"></i>
                            </th>
                            <td>Sale d'accouchement</td>
                            <td>
                              <span>12 patients</span>
                            </td>
                            <td>
                              5% <i className="fa fa-caret-up "></i>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-circle text-info"></i>
                            </th>
                            <td>Réanimation</td>
                            <td>
                              <span>02 patients</span>
                            </td>
                            <td>
                              100% <i className="fa fa-caret-up "></i>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-circle text-warning"></i>
                            </th>
                            <td>Cancers</td>
                            <td>
                              <span>07 patients</span>
                            </td>
                            <td>
                              20% <i className="fa fa-caret-down"></i>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-circle text-danger"></i>
                            </th>
                            <td>Enfants</td>
                            <td>
                              <span>10 patients</span>
                            </td>
                            <td>
                              20% <i className="fa fa-caret-up "></i>
                            </td>
                          </tr>
                          <tr>
                            <th>
                              <i className="fa fa-circle "></i>
                            </th>
                            <td>Autres</td>
                            <td>
                              <span>05 patients</span>
                            </td>
                            <td>
                              10% <i className="fa fa-caret-down"></i>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row clearfix">
              <div className="col-lg-4 col-md-12">
                <FeedCards />
              </div>
              <div className="col-lg-4 col-md-12">
                <TwitterFeedCard />
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="card overflowhidden">
                  <div className="body top_counter bg-success">
                    <div className="icon bg-transparent">
                      <img
                        src={require("../../assets/images/xs/avatar2.jpg")}
                        className="rounded-circle"
                        alt=""
                      />
                    </div>
                    <div className="content text-light">
                      <div>Team Leader</div>
                      <h6>Maryam Amiri</h6>
                    </div>
                  </div>
                  <div className="body">
                    <div className="list-group list-widget">
                      <a className="list-group-item">
                        <span className="badge badge-success">654</span>
                        <i className="fa fa-envelope text-muted"></i>Inbox
                      </a>
                      <a className="list-group-item">
                        <span className="badge badge-info">364</span>
                        <i className="fa fa-eye text-muted"></i> Profile visits
                      </a>
                      <a className="list-group-item">
                        <span className="badge badge-warning">19</span>
                        <i className="fa fa-bookmark text-muted"></i> Bookmarks
                      </a>
                      <a className="list-group-item">
                        <span className="badge badge-warning">12</span>
                        <i className="fa fa-phone text-muted"></i> Call
                      </a>
                      <a className="list-group-item">
                        <span className="badge badge-danger">54</span>
                        <i className="fa fa-comments-o text-muted"></i> Messages
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="row clearfix">
              <div className="col-lg-12"></div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  loginReducer,
  navigationReducer,
  analyticalReducer,
}) => ({
  email: loginReducer.email,
  menuArrowToggle: navigationReducer.menuArrowToggle,
  sparkleCardData: analyticalReducer.sparkleCardData,
  topProductDropDown: analyticalReducer.topProductDropDown,
  referralsDropDown: analyticalReducer.referralsDropDown,
  recentChatDropDown: analyticalReducer.recentChatDropDown,
  facebookShowProgressBar: analyticalReducer.facebookShowProgressBar,
  twitterShowProgressBar: analyticalReducer.twitterShowProgressBar,
  affiliatesShowProgressBar: analyticalReducer.affiliatesShowProgressBar,
  searchShowProgressBar: analyticalReducer.searchShowProgressBar,
  loadingPage: analyticalReducer.loadingPage,
});

export default connect(mapStateToProps, {
  toggleMenuArrow,
  loadSparcleCard,
  onPressTopProductDropDown,
  onPressReferralsDropDown,
  onPressRecentChatDropDown,
  onPressDataManagedDropDown,
  facebookProgressBar,
  twitterProgressBar,
  affiliatesProgressBar,
  searchProgressBar,
})(Dashbord);
