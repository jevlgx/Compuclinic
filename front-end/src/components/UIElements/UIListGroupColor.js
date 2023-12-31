import React from "react";
import { connect } from "react-redux";

class UIListGroupColor extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Color example</h2>
        </div>
        <div className="body">
          <ul className="list-group">
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item list-group-item-primary">
              A simple primary list group item
            </li>
            <li className="list-group-item list-group-item-secondary">
              A simple secondary list group item
            </li>
            <li className="list-group-item list-group-item-success">
              A simple success list group item
            </li>
            <li className="list-group-item list-group-item-danger">
              A simple danger list group item
            </li>
            <li className="list-group-item list-group-item-warning">
              A simple warning list group item
            </li>
            <li className="list-group-item list-group-item-info">
              A simple info list group item
            </li>
            <li className="list-group-item list-group-item-light">
              A simple light list group item
            </li>
            <li className="list-group-item list-group-item-dark">
              A simple dark list group item
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIListGroupColor);
