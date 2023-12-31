import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { onPressRecentChatDropDown } from "../../actions";

class FeedCards extends React.Component {
  render() {
    const { recentChatDropDown } = this.props;
    return (
      <div className="card">
        <div className="header">
          <h2>Compuclinic Feeds</h2>
        </div>
        <div className="body">
          <ul className="list-unstyled feeds_widget">
            <li>
              <div className="feeds-left">
                <i className="fa fa-thumbs-o-up"></i>
              </div>
              <div className="feeds-body">
                <h4 className="title">
                  7 New Feedback{" "}
                  <small className="float-right text-muted">Today</small>
                </h4>
                <small>It will give a smart finishing to your site</small>
              </div>
            </li>
            <li>
              <div className="feeds-left">
                <i className="fa fa-user"></i>
              </div>
              <div className="feeds-body">
                <h4 className="title">
                  New User{" "}
                  <small className="float-right text-muted">10:45</small>
                </h4>
                <small>I feel great! Thanks team</small>
              </div>
            </li>
            <li>
              <div className="feeds-left">
                <i className="fa fa-question-circle"></i>
              </div>
              <div className="feeds-body">
                <h4 className="title text-warning">
                  Server Warning{" "}
                  <small className="float-right text-muted">10:50</small>
                </h4>
                <small>Your connection is not private</small>
              </div>
            </li>
            <li>
              <div className="feeds-left">
                <i className="fa fa-check"></i>
              </div>
              <div className="feeds-body">
                <h4 className="title text-danger">
                  Issue Fixed{" "}
                  <small className="float-right text-muted">11:05</small>
                </h4>
                <small>WE have fix all Design bug with Responsive</small>
              </div>
            </li>
            <li>
              <div className="feeds-left">
                <i className="fa fa-shopping-basket"></i>
              </div>
              <div className="feeds-body">
                <h4 className="title">
                  7 New Orders{" "}
                  <small className="float-right text-muted">11:35</small>
                </h4>
                <small>You received a new oder from Tina.</small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

FeedCards.propTypes = {
  onPressRecentChatDropDown: PropTypes.func.isRequired,
};

const mapStateToProps = ({ analyticalReducer }) => ({
  recentChatDropDown: analyticalReducer.recentChatDropDown,
});

export default connect(mapStateToProps, {
  onPressRecentChatDropDown,
})(FeedCards);
