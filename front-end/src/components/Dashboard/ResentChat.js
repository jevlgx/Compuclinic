import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import { onPressRecentChatDropDown } from "../../actions";

class ResentChat extends React.Component {
  render() {
    const { recentChatDropDown } = this.props;
    return (
      <div className="card">
        <div className="header">
          <h2>Resent Chat</h2>

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
        <div className="body text-center">
          <div className="cwidget-scroll">
            <ul className="chat-widget m-r-5 clearfix">
              <li className="left float-left">
                <img
                  src={require("../../assets/images/xs/avatar2.jpg")}
                  className="rounded-circle"
                  alt=""
                />
                <div className="chat-info">
                  <span className="message">
                    Hello, John
                    <br />
                    What is the update on Project X?
                  </span>
                </div>
              </li>
              <li className="right">
                <img
                  src={require("../../assets/images/xs/avatar1.jpg")}
                  className="rounded-circle"
                  alt=""
                />
                <div className="chat-info">
                  <span className="message">
                    Hi, Alizee
                    <br /> It is almost completed. I will send you an email
                    later today.
                  </span>
                </div>
              </li>
              <li className="left float-left">
                <img
                  src={require("../../assets/images/xs/avatar2.jpg")}
                  className="rounded-circle"
                  alt=""
                />
                <div className="chat-info">
                  <span className="message">
                    That's great. Will catch you in evening.
                  </span>
                </div>
              </li>
              <li className="right">
                <img
                  src={require("../../assets/images/xs/avatar1.jpg")}
                  className="rounded-circle"
                  alt=""
                />
                <div className="chat-info">
                  <span className="message">
                    Sure we'will have a blast today.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="input-group p-t-15">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="icon-paper-plane"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Enter text here..."
            />
          </div>
        </div>
      </div>
    );
  }
}

ResentChat.propTypes = {
  onPressRecentChatDropDown: PropTypes.func.isRequired,
};

const mapStateToProps = ({ analyticalReducer }) => ({
  recentChatDropDown: analyticalReducer.recentChatDropDown,
});

export default connect(mapStateToProps, {
  onPressRecentChatDropDown,
})(ResentChat);
