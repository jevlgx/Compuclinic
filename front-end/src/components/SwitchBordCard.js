import React from "react";
import ReactEcharts from "echarts-for-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { onPressSwitchBordButton, onPressSwitchBordDropDown } from "../actions";
import { Dropdown } from "react-bootstrap";

class SwitchBordCard extends React.Component {
  render() {
    const {
      Icon,
      Buttons,
      OnPressSwitch,
      IsSwitch,
      onPressDropDown,
      isDropdownShow,
      disabledDropDown,
      onPressAllOnLight,
      onPressAllOffLight,
    } = this.props;
    return (
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="card">
          <div className="header">
            <h2>Lights Indoor</h2>
            <Dropdown as="ul" className="header-dropdown">
              <Dropdown.Toggle variant="success" as="li" id="dropdown-basic">
                <Dropdown.Menu
                  as="ul"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <li>
                    <a onClick={onPressAllOnLight}>All On</a>
                  </li>
                  <li>
                    <a onClick={onPressAllOffLight}>All Off</a>
                  </li>
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
            <div className="body">
              <ul className="list-unstyled basic-list ng-star-inserted">
                {Buttons.map((Button, index) => {
                  return (
                    <li
                      key={index}
                      className={
                        !Button.NotConnected
                          ? IsSwitch[index]
                            ? "ng-star-inserted text-warning"
                            : "ng-star-inserted"
                          : "text-danger ng-star-inserted"
                      }
                    >
                      {Button.title}
                      <a onClick={() => OnPressSwitch(index)}>
                        <span
                          className={
                            IsSwitch[index] === true && !Button.NotConnected
                              ? "badge"
                              : "badge d-none"
                          }
                        >
                          Off
                        </span>
                        <span
                          className={
                            IsSwitch[index] === false && !Button.NotConnected
                              ? "badge"
                              : "badge d-none"
                          }
                        >
                          On
                        </span>
                      </a>
                      <span
                        className={
                          Button.NotConnected
                            ? "ng-star-inserted "
                            : "ng-star-inserted d-none"
                        }
                      >
                        Not Connected
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SwitchBordCard.propTypes = {};

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
});

export default connect(mapStateToProps, {
  onPressSwitchBordButton,
})(SwitchBordCard);
