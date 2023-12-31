import React from "react";
import { connect } from "react-redux";

class UIButtonCard extends React.Component {
  render() {
    return (
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Buttons</h2>
            </div>
            <div className="body">
              <button type="button" className="btn btn-primary mr-1">
                Primary
              </button>
              <button type="button" className="btn btn-secondary mr-1">
                Secondary
              </button>
              <button type="button" className="btn btn-success mr-1">
                Success
              </button>
              <button type="button" className="btn btn-danger mr-1">
                Danger
              </button>
              <button type="button" className="btn btn-warning mr-1">
                Warning
              </button>
              <button type="button" className="btn btn-info mr-1">
                Info
              </button>
              <button type="button" className="btn btn-light mr-1">
                Light
              </button>
              <button type="button" className="btn btn-dark mr-1">
                Dark
              </button>
              <button type="button" className="btn btn-link mr-1">
                Link
              </button>
            </div>
            <div className="body">
              <h6>Disabled State</h6>
              <button type="button" className="btn btn-primary disabled mr-1">
                Primary
              </button>
              <button type="button" className="btn btn-secondary disabled mr-1">
                Secondary
              </button>
              <button type="button" className="btn btn-success disabled mr-1">
                Success
              </button>
              <button type="button" className="btn btn-danger disabled mr-1">
                Danger
              </button>
              <button type="button" className="btn btn-warning disabled mr-1">
                Warning
              </button>
              <button type="button" className="btn btn-info disabled mr-1">
                Info
              </button>
              <button type="button" className="btn btn-light disabled mr-1">
                Light
              </button>
              <button type="button" className="btn btn-dark disabled mr-1">
                Dark
              </button>
              <button type="button" className="btn btn-link disabled mr-1">
                Link
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Button tags</h2>
            </div>
            <div className="body">
              <a className="btn btn-primary mr-1" role="button">
                Link
              </a>
              <button className="btn btn-primary mr-1" type="submit">
                Button
              </button>
              <input
                className="btn btn-primary mr-1"
                type="button"
                value="Input"
              />
              <input
                className="btn btn-primary mr-1"
                type="submit"
                value="Submit"
              />
              <input
                className="btn btn-primary mr-1"
                type="reset"
                value="Reset"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Outline buttons</h2>
            </div>
            <div className="body">
              <button type="button" className="btn btn-outline-primary mr-1">
                Primary
              </button>
              <button type="button" className="btn btn-outline-secondary mr-1">
                Secondary
              </button>
              <button type="button" className="btn btn-outline-success mr-1">
                Success
              </button>
              <button type="button" className="btn btn-outline-danger mr-1">
                Danger
              </button>
              <button type="button" className="btn btn-outline-warning mr-1">
                Warning
              </button>
              <button type="button" className="btn btn-outline-info mr-1">
                Info
              </button>
              <button type="button" className="btn btn-outline-light mr-1">
                Light
              </button>
              <button type="button" className="btn btn-outline-dark mr-1">
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(UIButtonCard);
