import React from "react";
import { connect } from "react-redux";

class UIDropdownTabCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdown: false };
  }
  dorpdownToggle() {
    this.setState({ dropdown: !this.state.dropdown });
  }
  render() {
    const { HeaderText, NavTabClass, TabData } = this.props;

    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>{HeaderText}</h2>
          </div>
          <div className="body">
            <ul className={NavTabClass ? NavTabClass : "nav nav-tabs"}>
              <li className="nav-item mr-1">
                <a className="nav-link active show" data-toggle="tab">
                  Active{" "}
                </a>
              </li>
              <li
                className={
                  this.state.dropdown
                    ? "nav-item dropdown mr-1 show"
                    : "nav-item dropdown mr-1"
                }
              >
                <a
                  className="nav-link dropdown-toggle"
                  onClick={() => {
                    this.dorpdownToggle();
                  }}
                  data-toggle="dropdown"
                  role="button"
                >
                  Dropdown
                </a>
                <div
                  className={
                    this.state.dropdown ? "dropdown-menu show" : "dropdown-menu"
                  }
                  x-placement="bottom-start"
                >
                  <a className="dropdown-item">Action</a>
                  <a className="dropdown-item">Another action</a>
                  <a className="dropdown-item">Something else here</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Separated link</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane show active" id="Active">
                <h6>Home</h6>
                <p>{TabData}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIDropdownTabCard);
