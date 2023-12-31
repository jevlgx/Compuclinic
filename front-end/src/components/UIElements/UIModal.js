import React from "react";
import { connect } from "react-redux";
import { Button, Modal } from "react-bootstrap";

class UIModalComponent extends React.Component {
  render() {
    const { title, bodyText, onClose, onSave, size, show } = this.props;
    return (
      <Modal size={size} show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{bodyText}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSave}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIModalComponent);
