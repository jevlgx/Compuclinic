import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

class TextAlign extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="card">
          <div className="header">
            <h2>
              Text Align{" "}
              <small>
                You can use classes which names are{" "}
                <code>
                  .align-left, .align-center, .align-right, .align-justify
                </code>
              </small>
            </h2>
            <Dropdown as="ul" className="header-dropdown">
              <Dropdown.Toggle variant="success" as="li" id="dropdown-basic">
                <Dropdown.Menu
                  as="ul"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <li>
                    <a>Action</a>
                  </li>
                  <li>
                    <a>Another Action</a>
                  </li>
                  <li>
                    <a>Something else</a>
                  </li>
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
          </div>
          <div className="body">
            <div className="row clearfix">
              <div className="col-md-3">
                <p className="align-left">
                  <b>Align Left</b>
                </p>
                <div className="align-left">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
              <div className="col-md-3">
                <p className="align-center">
                  <b>Align Center</b>
                </p>
                <div className="align-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
              <div className="col-md-3">
                <p className="align-right">
                  <b>Align Right</b>
                </p>
                <div className="align-right">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
              <div className="col-md-3">
                <p className="align-justify">
                  <b>Align Justify</b>
                </p>
                <div className="align-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(TextAlign);
