import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

class UIButtonGroupCard extends React.Component {
  render() {
    return (
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Button group</h2>
            </div>
            <div className="body">
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button type="button" className="btn btn-secondary">
                  Left
                </button>
                <button type="button" className="btn btn-secondary">
                  Middle
                </button>
                <button type="button" className="btn btn-secondary">
                  Right
                </button>
              </div>
              <hr />
              <h6>Button toolbar</h6>
              <div
                className="btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" className="btn btn-secondary">
                    1
                  </button>
                  <button type="button" className="btn btn-secondary">
                    2
                  </button>
                  <button type="button" className="btn btn-secondary">
                    3
                  </button>
                  <button type="button" className="btn btn-secondary">
                    4
                  </button>
                </div>
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="Second group"
                >
                  <button type="button" className="btn btn-secondary">
                    5
                  </button>
                  <button type="button" className="btn btn-secondary">
                    6
                  </button>
                  <button type="button" className="btn btn-secondary">
                    7
                  </button>
                </div>
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Third group"
                >
                  <button type="button" className="btn btn-secondary">
                    8
                  </button>
                </div>
              </div>
              <hr />
              <div
                className="btn-toolbar mb-3"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="First group"
                >
                  <button type="button" className="btn btn-secondary">
                    1
                  </button>
                  <button type="button" className="btn btn-secondary">
                    2
                  </button>
                  <button type="button" className="btn btn-secondary">
                    3
                  </button>
                  <button type="button" className="btn btn-secondary">
                    4
                  </button>
                </div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text" id="btnGroupAddon">
                      @
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Input group example"
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  />
                </div>
              </div>
              <hr />
              <h6>Sizing</h6>
              <div
                className="btn-group btn-group-lg"
                role="group"
                aria-label="Large button group"
              >
                <button type="button" className="btn btn-secondary">
                  Left
                </button>
                <button type="button" className="btn btn-secondary">
                  Middle
                </button>
                <button type="button" className="btn btn-secondary">
                  Right
                </button>
              </div>
              <br />
              <br />
              <div
                className="btn-group"
                role="group"
                aria-label="Default button group"
              >
                <button type="button" className="btn btn-secondary">
                  Left
                </button>
                <button type="button" className="btn btn-secondary">
                  Middle
                </button>
                <button type="button" className="btn btn-secondary">
                  Right
                </button>
              </div>
              <br />
              <br />
              <div
                className="btn-group btn-group-sm"
                role="group"
                aria-label="Small button group"
              >
                <button type="button" className="btn btn-secondary">
                  Left
                </button>
                <button type="button" className="btn btn-secondary">
                  Middle
                </button>
                <button type="button" className="btn btn-secondary">
                  Right
                </button>
              </div>
              <hr />
              <h6>Nesting</h6>
              <div
                className="btn-group"
                role="group"
                aria-label="Button group with nested dropdown"
              >
                <button type="button" className="btn btn-secondary">
                  1
                </button>
                <button type="button" className="btn btn-secondary">
                  2
                </button>

                <div className="btn-group" role="group">
                  <Dropdown as="div">
                    <Dropdown.Toggle
                      variant="success"
                      as="button"
                      id="dropdown-basic"
                      className="btn btn-secondary"
                    >
                      Dropdown
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      as="ul"
                      className="dropdown-menu dropdown-menu-right"
                    >
                      <a className="dropdown-item">Dropdown link</a>
                      <a className="dropdown-item">Dropdown link</a>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {})(UIButtonGroupCard);
