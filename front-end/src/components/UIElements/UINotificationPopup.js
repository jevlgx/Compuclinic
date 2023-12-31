import React from "react";
import { connect } from "react-redux";
import { notifyGeneralInfo } from "../../actions";

class UINotificationPopup extends React.Component {
  render() {
    return (
      <div className="row clealfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Popup Positions</h2>
            </div>
            <div className="body">
              <button
                type="button"
                className="btn btn-default btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(4);
                }}
                data-context="info"
                data-message="Hi, I'm here"
                data-position="bottom-right"
              >
                Bottom Right
              </button>
              <button
                type="button"
                className="btn btn-default btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(5);
                }}
                data-context="info"
                data-message="Hi, I'm here"
                data-position="bottom-left"
              >
                Bottom Left
              </button>
              <button
                type="button"
                className="btn btn-default btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(6);
                }}
                data-context="info"
                data-message="Hi, I'm here"
                data-position="top-left"
              >
                Top Left
              </button>
              <button
                type="button"
                className="btn btn-default btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(7);
                }}
                data-context="info"
                data-message="Hi, I'm here"
                data-position="top-right"
              >
                Top Right
              </button>
              <button
                type="button"
                className="btn btn-default btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(8);
                }}
                data-context="info"
                data-message="Hi, I'm here"
                data-position="top-full-width"
              >
                Top Full Width
              </button>
              <button
                type="button"
                className="btn btn-default btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(9);
                }}
                data-context="info"
                data-message="Hi, I'm here"
                data-position="bottom-full-width"
              >
                Bottom Full Width
              </button>
              <button
                type="button"
                className="btn btn-default btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(10);
                }}
                data-context="info"
                data-message="Hi, I'm here"
                data-position="top-center"
              >
                Top Center
              </button>
              <button
                type="button"
                className="btn btn-default btn-toastr mr-1"
                onClick={() => {
                  this.props.notifyGeneralInfo(11);
                }}
                data-context="info"
                data-message="Hi, I'm here"
                data-position="bottom-center"
              >
                Bottom Center
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {
  notifyGeneralInfo,
})(UINotificationPopup);
