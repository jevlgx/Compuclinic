import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import image from "../../assets/images/user.png";

class BlogSocialCouterCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Social Counter</h2>
        </div>
        <div className="body social_counter">
          <ul className=" list-unstyled basic-list">
            <li>
              <i className="fa fa-facebook-square m-r-5"></i> FaceBook{" "}
              <span className="badge badge-primary">16,785</span>
            </li>
            <li>
              <i className="fa fa-twitter-square m-r-5"></i> Twitter{" "}
              <span className="badge-purple badge">2,365</span>
            </li>
            <li>
              <i className="fa fa-linkedin-square m-r-5"></i> Linkedin
              <span className="badge-success badge">9,021</span>
            </li>
            <li>
              <i className="fa fa-google-plus-square m-r-5"></i> Google Plus
              <span className="badge-info badge">725</span>
            </li>
            <li>
              <i className="fa fa-behance-square m-r-5"></i> Behance
              <span className="badge-info badge">1,725</span>
            </li>
            <li>
              <i className="fa fa-dribbble m-r-5"></i> Dribbble
              <span className="badge-info badge">11,725</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

BlogSocialCouterCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(BlogSocialCouterCard);
