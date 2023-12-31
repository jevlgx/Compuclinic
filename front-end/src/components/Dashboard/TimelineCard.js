import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { onPressRecentChatDropDown } from "../../actions";

class TimelineCard extends React.Component {
  render() {
    const { recentChatDropDown } = this.props;
    return (
      <div className="card">
        <div className="header">
          <h2>Timeline</h2>
          <ul className="header-dropdown">
            <li className="remove">
              <a role="button" className="boxs-close">
                <i className="fa fa-close"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="body">
          <div className="new_timeline">
            <div className="header">
              <div className="color-overlay">
                <div className="day-number">8</div>
                <div className="date-right">
                  <div className="day-name">Monday</div>
                  <div className="month">February 2018</div>
                </div>
              </div>
            </div>
            <ul>
              <li>
                <div className="bullet pink"></div>
                <div className="time">11am</div>
                <div className="desc">
                  <h3>Attendance</h3>
                  <h4>Computer Class</h4>
                </div>
              </li>
              <li>
                <div className="bullet green"></div>
                <div className="time">12pm</div>
                <div className="desc">
                  <h3>Design Team</h3>
                  <h4>Hangouts</h4>
                  <ul className="list-unstyled team-info margin-0 p-t-5">
                    <li>
                      <img
                        src="http://via.placeholder.com/35x35"
                        alt="Avatar"
                      />
                    </li>
                    <li>
                      <img
                        src="http://via.placeholder.com/35x35"
                        alt="Avatar"
                      />
                    </li>
                    <li>
                      <img
                        src="http://via.placeholder.com/35x35"
                        alt="Avatar"
                      />
                    </li>
                    <li>
                      <img
                        src="http://via.placeholder.com/35x35"
                        alt="Avatar"
                      />
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="bullet orange"></div>
                <div className="time">1:30pm</div>
                <div className="desc">
                  <h3>Lunch Break</h3>
                </div>
              </li>
              <li>
                <div className="bullet green"></div>
                <div className="time">2pm</div>
                <div className="desc">
                  <h3>Finish</h3>
                  <h4>Go to Home</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

TimelineCard.propTypes = {
  onPressRecentChatDropDown: PropTypes.func.isRequired,
};

const mapStateToProps = ({ analyticalReducer }) => ({
  recentChatDropDown: analyticalReducer.recentChatDropDown,
});

export default connect(mapStateToProps, {
  onPressRecentChatDropDown,
})(TimelineCard);
