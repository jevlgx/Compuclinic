import React from "react";
import { connect } from "react-redux";

class MultipleAddons extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>
            Multiple addons{" "}
            <small>
              Multiple add-ons are supported and can be mixed with checkbox and
              radio input versions.
            </small>
          </h2>
        </div>
        <div className="body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
            </div>
            <input
              aria-label="Amount (to the nearest dollar)"
              className="form-control"
              type="text"
            />
          </div>
          <div className="input-group">
            <input
              aria-label="Amount (to the nearest dollar)"
              className="form-control"
              type="text"
            />
            <div className="input-group-append">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(MultipleAddons);
