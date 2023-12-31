import React from "react";
import { connect } from "react-redux";

class MyStatsCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>My Stats</h2>
        </div>
        <div className="body">
          <ul className=" list-unstyled basic-list">
            <li>
              <i className="icon-book-open m-r-5"></i> Active Projects{" "}
              <span className="badge badge-primary">21</span>
            </li>
            <li>
              <i className="icon-list m-r-5"></i> Task Pending{" "}
              <span className="badge-purple badge">50</span>
            </li>
            <li>
              <i className="fa fa-ticket m-r-5"></i> Support Tickets
              <span className="badge-success badge">9</span>
            </li>
            <li>
              <i className="icon-tag m-r-5"></i> New Projects
              <span className="badge-info badge">7</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

MyStatsCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(MyStatsCard);
