import React from "react";
import { connect } from "react-redux";

class UIHeaderCard extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Header </h2>
          </div>
          <div className="body">
            <h1>Dashboard Heading 1</h1>
            <h2>Dashboard Heading 2</h2>
            <h3>Dashboard Heading 3</h3>
            <h4>Dashboard Heading 4</h4>
            <h5>Dashboard Heading 5</h5>
            <h6>Dashboard Heading 6</h6>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIHeaderCard);
