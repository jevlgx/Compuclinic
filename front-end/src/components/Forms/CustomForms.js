import React from "react";
import { connect } from "react-redux";

class CustomForms extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>
            Custom forms{" "}
            <small>
              Input groups include support for custom selects and custom file
              inputs. Browser default versions of these are not supported.
            </small>
          </h2>
        </div>
        <div className="body">
          <h6>1. Custom select</h6>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text">Options</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01">
              <option value="0">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <select className="custom-select" id="inputGroupSelect02">
              <option value="">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="input-group-append">
              <label className="input-group-text">Options</label>
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
            <select className="custom-select" id="inputGroupSelect03">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group">
            <select className="custom-select" id="inputGroupSelect04">
              <option>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
        <div className="body">
          <h6>2. Custom file input</h6>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
            <div className="custom-file">
              <input
                className="custom-file-input"
                id="inputGroupFile03"
                type="file"
              />
              <label className="custom-file-label">Choose file</label>
            </div>
          </div>
          <div className="input-group">
            <div className="custom-file">
              <input
                className="custom-file-input"
                id="inputGroupFile04"
                type="file"
              />
              <label className="custom-file-label">Choose file</label>
            </div>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(CustomForms);
