import React from "react";
import { connect } from "react-redux";
import { Toast } from "react-bootstrap";

class Notification extends React.Component {
  render() {
    const { type, position, dialogText, show, onClose } = this.props;
    return (
      <Toast
        id="toast-container"
        show={true}
        onClose={onClose}
        className={`toast-${type} toast-${position}`}
        autohide
        delay={3000}
      >
        <Toast.Body className={`toast-${type} mb-0 ml-0`}>
          <strong className="mr-auto"> {dialogText} </strong>
          <button className="toast-close-button" onClick={onClose}>
            x
          </button>
        </Toast.Body>
      </Toast>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(Notification);
