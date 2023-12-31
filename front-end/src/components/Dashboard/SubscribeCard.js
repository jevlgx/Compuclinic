import React from "react";
import { connect } from "react-redux";

class SubscribeCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Subscribe</h2>
        </div>
        <div className="body">
          <form>
            <div className="form-group">
              <input
                type="text"
                value=""
                placeholder="Enter Name"
                className="form-control"
                onChange={() => {}}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                value=""
                placeholder="Enter Email"
                className="form-control"
                onChange={() => {}}
              />
            </div>
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    );
  }
}

SubscribeCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(SubscribeCard);
