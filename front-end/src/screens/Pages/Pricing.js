import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import PricingTableCard1 from "../../components/Pages/PricingTableCard1";
import PricingTableCard2 from "../../components/Pages/PricingTableCard2";
import PricingTableCard3 from "../../components/Pages/PricingTableCard3";
import {
  PriceCardData1,
  PriceCardData2,
  PriceCardData3,
} from "../../Data/Pages";

class Pricing extends React.Component {
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
              HeaderText="Pricing"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Pricing", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              {PriceCardData1.map((data, i) => {
                return (
                  <PricingTableCard1
                    key={i}
                    head={data.head}
                    list={data.list}
                    price={data.price}
                    joined={data.joined}
                  />
                );
              })}
            </div>
            <div className="row clearfix">
              <div className="col-12">
                <h5>Pricing Table Option 2</h5>
                <hr />
              </div>
              {PriceCardData2.map((data, i) => {
                return (
                  <PricingTableCard2
                    key={i}
                    imag={data.image}
                    head={data.head}
                    list={data.list}
                    price={data.price}
                    joined={data.joined}
                  />
                );
              })}
            </div>
            <div className="row clearfix">
              <div className="col-12">
                <h5>Pricing Table Option 3</h5>
                <hr />
              </div>
              {PriceCardData3.map((data, i) => {
                return (
                  <PricingTableCard3
                    key={i}
                    img={data.image}
                    head={data.head}
                    price={data.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
});

export default connect(mapStateToProps, {})(Pricing);
