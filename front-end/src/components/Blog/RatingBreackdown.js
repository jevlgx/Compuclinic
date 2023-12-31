import React from "react";
import { connect } from "react-redux";

class RatingBreackdown extends React.Component {
  render() {
    return (
      <div className="card average_rating">
        <div className="header">
          <h2>Rating breakdown</h2>
        </div>
        <div className="body clearfix">
          <div className="float-left">
            <div className="float-left">
              <div>
                5 <span className="icon-star"></span>
              </div>
            </div>
            <div className="float-left">
              <div className="progress">
                <div
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="5"
                  className="progress-bar progress-bar-success"
                  role="progressbar"
                >
                  <span className="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div className="float-right">1</div>
          </div>
          <div className="float-left">
            <div className="float-left">
              <div>
                4 <span className="icon-star"></span>
              </div>
            </div>
            <div className="float-left">
              <div className="progress">
                <div
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="4"
                  className="progress-bar progress-bar-primary"
                  role="progressbar"
                >
                  <span className="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div className="float-right">1</div>
          </div>
          <div className="float-left">
            <div className="float-left">
              <div>
                3 <span className="icon-star"></span>
              </div>
            </div>
            <div className="float-left">
              <div className="progress">
                <div
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="3"
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                >
                  <span className="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div className="float-right">0</div>
          </div>
          <div className="float-left">
            <div className="float-left">
              <div>
                2 <span className="icon-star"></span>
              </div>
            </div>
            <div className="float-left">
              <div className="progress">
                <div
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="2"
                  className="progress-bar progress-bar-warning"
                  role="progressbar"
                >
                  <span className="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div className="float-right">0</div>
          </div>
          <div className="float-left">
            <div className="float-left">
              <div>
                1 <span className="icon-star"></span>
              </div>
            </div>
            <div className="float-left">
              <div className="progress">
                <div
                  aria-valuemax="5"
                  aria-valuemin="0"
                  aria-valuenow="1"
                  className="progress-bar progress-bar-danger"
                  role="progressbar"
                >
                  <span className="sr-only">80% Complete (danger)</span>
                </div>
              </div>
            </div>
            <div className="float-right">0</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(RatingBreackdown);
