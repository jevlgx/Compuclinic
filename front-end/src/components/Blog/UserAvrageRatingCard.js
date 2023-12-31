import React from "react";
import { connect } from "react-redux";

class UserAvrageRatingCard extends React.Component {
  render() {
    return (
      <div className="card average_rating">
        <div className="header">
          <h2>Average user rating</h2>
        </div>
        <div className="body">
          <h2 className="bold padding-bottom-7">
            4.3 <small>/ 5</small>
          </h2>
          <button className="btn btn-warning btn-sm mr-1" type="submit">
            <i className="icon-star"></i>
          </button>
          <button className="btn btn-warning btn-sm mr-1" type="submit">
            <i className="icon-star"></i>
          </button>
          <button className="btn btn-warning btn-sm mr-1" type="submit">
            <i className="icon-star"></i>
          </button>
          <button className="btn btn-outline-warning btn-sm mr-1" type="submit">
            <i className="icon-star"></i>
          </button>
          <button className="btn btn-outline-warning btn-sm mr-1" type="submit">
            <i className="icon-star"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(UserAvrageRatingCard);
