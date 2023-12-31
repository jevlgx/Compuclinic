import React from "react";
import { connect } from "react-redux";

class BasicElementExample extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2> Basic example</h2>
        </div>
        <div className="body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">@</span>
            </div>
            <input
              aria-describedby="basic-addon1"
              aria-label="Username"
              className="form-control"
              placeholder="Username"
              type="text"
            />
          </div>
          <div className="input-group mb-3">
            <input
              aria-describedby="basic-addon2"
              aria-label="Recipient's username"
              className="form-control"
              placeholder="Recipient's username"
              type="text"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                @example.com
              </span>
            </div>
          </div>
          <label>Your vanity URL</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                https://example.com/users/
              </span>
            </div>
            <input
              aria-describedby="basic-addon3"
              className="form-control"
              id="basic-url"
              type="text"
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">$</span>
            </div>
            <input
              aria-label="Amount (to the nearest dollar)"
              className="form-control"
              type="text"
            />
            <div className="input-group-append">
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">With textarea</span>
            </div>
            <textarea
              aria-label="With textarea"
              className="form-control"
            ></textarea>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BasicElementExample);
