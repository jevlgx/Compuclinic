import React from "react";
import { connect } from "react-redux";
import { onPressAddContact } from "../actions";

class AddContact extends React.Component {
  render() {
    const { isContactModal } = this.props;
    return (
      <div className={isContactModal ? "modal fade show" : "modal fade "}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="title" id="defaultModalLabel">
                Add New Doctor
              </h6>
            </div>
            <div className="modal-body">
              <div className="row clearfix">
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Address"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      type="file"
                      className="form-control-file"
                      id="exampleInputFile"
                      aria-describedby="fileHelp"
                    />
                    <small id="fileHelp" className="form-text text-muted">
                      This is some placeholder block-level help text for the
                      above input. It's a bit lighter and easily wraps to a new
                      line.
                    </small>
                  </div>
                  <hr />
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Facebook"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Twitter"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Linkedin"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="instagram"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Add
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => {
                  this.props.onPressAddContact();
                }}
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
  isContactModal: mailInboxReducer.isContactModal,
});

export default connect(mapStateToProps, { onPressAddContact })(AddContact);
