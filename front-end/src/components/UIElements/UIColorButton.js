import React from "react";
import { connect } from "react-redux";

class UIColorButton extends React.Component {
  render() {
    return (
      <div className="row clearfix">
        <div className="col-md-12">
          <div className="card">
            <div className="body">
              <p className="demo-button">
                <button type="button" className="btn btn-default mr-1">
                  <i className="fa fa-plus-square"></i> <span>Default</span>
                </button>
                <button type="button" className="btn btn-primary mr-1">
                  <i className="fa fa-refresh"></i> <span>Primary</span>
                </button>
                <button type="button" className="btn btn-info mr-1">
                  <i className="fa fa-info-circle"></i> <span>Info</span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary mr-1"
                  disabled="disabled"
                >
                  <i className="fa fa-refresh fa-spin"></i>{" "}
                  <span>Refreshing...</span>
                </button>
              </p>
              <br />
              <p className="demo-button">
                <button type="button" className="btn btn-success mr-1">
                  <i className="fa fa-check-circle"></i> <span>Success</span>
                </button>
                <button type="button" className="btn btn-warning mr-1">
                  <i className="fa fa-warning"></i> <span>Warning</span>
                </button>
                <button type="button" className="btn btn-danger mr-1">
                  <i className="fa fa-trash-o"></i> <span>Danger</span>
                </button>
                <button
                  type="button"
                  className="btn btn-primary mr-1"
                  disabled="disabled"
                >
                  <i className="fa fa-spinner fa-spin"></i>{" "}
                  <span>Loading...</span>
                </button>
              </p>
              <br />
              <p className="demo-button">
                <button type="button" className="btn btn-danger mr-1">
                  <i className="fa fa-heart"></i> <span>Love</span>
                </button>
                <button type="button" className="btn btn-danger mr-1">
                  <span>Love</span> <i className="fa fa-heart"></i>
                </button>
                <button type="button" className="btn btn-danger mr-1">
                  <span className="sr-only">Love</span>{" "}
                  <i className="fa fa-heart"></i>
                </button>
              </p>
              <br />
              <p className="demo-button">
                <button
                  type="button"
                  className="btn btn-default mr-1"
                  title="Refresh"
                >
                  <span className="sr-only">Refresh</span>{" "}
                  <i className="fa fa-refresh"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-default mr-1"
                  title="Copy"
                >
                  <span className="sr-only">Copy</span>{" "}
                  <i className="fa fa-files-o"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-success mr-1"
                  title="Save"
                >
                  <span className="sr-only">Save</span>{" "}
                  <i className="fa fa-save"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-danger mr-1"
                  title="Delete"
                >
                  <span className="sr-only">Delete</span>{" "}
                  <i className="fa fa-trash-o"></i>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIColorButton);
