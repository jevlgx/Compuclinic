import React from "react";
import { connect } from "react-redux";

class InputwithCheckbox extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Input with Checkboxes and radios</h2>
        </div>
        <div className="body">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  aria-label="Checkbox for following text input"
                  type="checkbox"
                />
              </div>
            </div>
            <input
              aria-label="Text input with checkbox"
              className="form-control"
              type="text"
            />
          </div>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <input
                  aria-label="Radio button for following text input"
                  type="radio"
                />
              </div>
            </div>
            <input
              aria-label="Text input with radio button"
              className="form-control"
              type="text"
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(InputwithCheckbox);
