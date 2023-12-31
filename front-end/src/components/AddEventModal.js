import React from "react";
import { connect } from "react-redux";
import { onPresAddEvent } from "../actions";

class AddEventModal extends React.Component {
  render() {
    const { isEventModal } = this.props;
    return (
      <div
        className={isEventModal ? "modal fade show" : "modal fade"}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="defaultModalLabel">
                Add Event
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <div className="form-line">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Event Date"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-line">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Event Title"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="form-line">
                  <textarea
                    className="form-control no-resize"
                    placeholder="Event Description..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Add
              </button>
              <button
                type="button"
                onClick={() => {
                  this.props.onPresAddEvent();
                }}
                className="btn btn-simple"
                data-dismiss="modal"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({
  isEventModal: mailInboxReducer.isEventModal,
});

export default connect(mapStateToProps, { onPresAddEvent })(AddEventModal);
