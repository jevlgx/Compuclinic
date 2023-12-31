import React from "react";
import { connect } from "react-redux";
import image from "../../assets/images/user.png";

class BlogAboutCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>About Me</h2>
        </div>
        <div className="body text-center">
          <div className="profile-image m-b-15">
            <img alt="" className="rounded-circle" src={image} />
          </div>
          <div>
            <h4 className="m-b-0">
              <strong>Alizee</strong> Thomas
            </h4>
            <span>Washington, d.c.</span>
          </div>
          <div className="m-t-15">
            <button className="btn btn-primary mr-1">Follow</button>
            <button className="btn btn-outline-secondary">Message</button>
          </div>
        </div>
      </div>
    );
  }
}

BlogAboutCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(BlogAboutCard);
