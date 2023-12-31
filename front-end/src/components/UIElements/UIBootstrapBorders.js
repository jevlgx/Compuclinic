import React from "react";
import { connect } from "react-redux";

class UIBootstrapBorders extends React.Component {
  render() {
    return (
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Borders</h2>
            </div>
            <div className="body bd-example-border-utils">
              <span className="border"></span>
              <span className="border-top"></span>
              <span className="border-right"></span>
              <span className="border-bottom"></span>
              <span className="border-left"></span>
              <hr />
              <h6>Subtractive</h6>
              <span className="border-0"></span>
              <span className="border-top-0"></span>
              <span className="border-right-0"></span>
              <span className="border-bottom-0"></span>
              <span className="border-left-0"></span>
              <hr />
              <h6>Border color</h6>
              <span className="border border-primary"></span>
              <span className="border border-secondary"></span>
              <span className="border border-success"></span>
              <span className="border border-danger"></span>
              <span className="border border-warning"></span>
              <span className="border border-info"></span>
              <span className="border border-light"></span>
              <span className="border border-dark"></span>
              <span className="border border-white"></span>
              <hr />
              <h6>Border-radius</h6>
              <img
                src="http://via.placeholder.com/100x100"
                alt="..."
                className="rounded"
              />
              <img
                src="http://via.placeholder.com/100x100"
                alt="..."
                className="rounded-top"
              />
              <img
                src="http://via.placeholder.com/100x100"
                alt="..."
                className="rounded-right"
              />
              <img
                src="http://via.placeholder.com/100x100"
                alt="..."
                className="rounded-bottom"
              />
              <img
                src="http://via.placeholder.com/100x100"
                alt="..."
                className="rounded-left"
              />
              <img
                src="http://via.placeholder.com/100x100"
                alt="..."
                className="rounded-circle"
              />
              <img
                src="http://via.placeholder.com/100x100"
                alt="..."
                className="rounded-0"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIBootstrapBorders);
