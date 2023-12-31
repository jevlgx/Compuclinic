import React from "react";
import { connect } from "react-redux";
import { notifyGeneralInfo } from "../../actions";

class UINotificationMessage extends React.Component {
  render() {
    return (
      <div className="row clealfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Message Context</h2>
            </div>
            <div className="body">
              <button
                type="button"
                className="btn btn-primary btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(0);
                }}
                data-context="info"
                data-message="This is general theme info"
                data-position="bottom-right"
              >
                General Info
              </button>
              <button
                type="button"
                className="btn btn-success btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(1);
                }}
                data-context="success"
                data-message="This is success info"
                data-position="bottom-right"
              >
                Success Info
              </button>
              <button
                type="button"
                className="btn btn-warning btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(2);
                }}
                data-context="warning"
                data-message="This is warning info"
                data-position="bottom-right"
              >
                Warning Info
              </button>
              <button
                type="button"
                className="btn btn-danger btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(3);
                }}
                data-context="error"
                data-message="This is error info"
                data-position="bottom-right"
              >
                Error Info
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {
  notifyGeneralInfo,
})(UINotificationMessage);
