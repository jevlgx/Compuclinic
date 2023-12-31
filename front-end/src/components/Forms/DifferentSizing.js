import React from "react";
import { connect } from "react-redux";

class DifferentSizing extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Different Sizing</h2>
        </div>
        <div className="body">
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Small
              </span>
            </div>
            <input
              aria-describedby="inputGroup-sizing-sm"
              aria-label="Small"
              className="form-control"
              type="text"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Default
              </span>
            </div>
            <input
              aria-describedby="inputGroup-sizing-default"
              aria-label="Default"
              className="form-control"
              type="text"
            />
          </div>
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">
                Large
              </span>
            </div>
            <input
              aria-describedby="inputGroup-sizing-sm"
              aria-label="Large"
              className="form-control"
              type="text"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(DifferentSizing);
