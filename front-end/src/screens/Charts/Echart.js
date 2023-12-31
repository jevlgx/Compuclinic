import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import StackedAreaChart from "../../components/Charts/StackedAreaChart";
import PieChart from "../../components/Charts/PieChart";
import PunchCard from "../../components/Charts/PunchCard";
import LargeScaleAreaChart from "../../components/Charts/LargeScaleAreaChart";

class Echart extends React.Component {
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
              HeaderText="E-Charts"
              Breadcrumb={[
                { name: "Cahrts", navigate: "" },
                { name: "E-Charts", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <StackedAreaChart />
              <PieChart />
              <PunchCard />
              <LargeScaleAreaChart />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(Echart);
