import React from "react";
import { connect } from "react-redux";

class UIColorsText extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Colors</h2>
          </div>
          <div className="body">
            <p className="text-primary">.text-primary</p>
            <p className="text-secondary">.text-secondary</p>
            <p className="text-success">.text-success</p>
            <p className="text-danger">.text-danger</p>
            <p className="text-warning">.text-warning</p>
            <p className="text-info">.text-info</p>
            <p className="text-light bg-dark">.text-light</p>
            <p className="text-dark">.text-dark</p>
            <p className="text-body">.text-body</p>
            <p className="text-muted">.text-muted</p>
            <p className="text-white bg-dark">.text-white</p>
            <p className="text-black-50">.text-black-50</p>
            <p className="text-white-50 bg-dark">.text-white-50</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIColorsText);
