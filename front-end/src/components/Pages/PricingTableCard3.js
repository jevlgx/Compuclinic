import React from "react";
import { connect } from "react-redux";

class PricingTableCard3 extends React.Component {
  render() {
    const { list, head, price, joined, img } = this.props;
    return (
      <div className="col-lg-4 col-md-12">
        <div className="card pricing3">
          <div className="body">
            <div className="pricing-option">
              <i className={img}></i>
              <h5>{head}</h5>
              <hr />
              <div className="m-t-30 m-b-30">
                <h6>Files</h6>
                <p>
                  .PSD .AI .PNG .SVG
                  <br />
                  Licensed for 1 project
                </p>
              </div>
              <div className="price">
                <span className="price">
                  {price} <b>$</b>
                </span>
              </div>
              <a className="btn btn-outline-secondary">Purchase now</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(PricingTableCard3);
