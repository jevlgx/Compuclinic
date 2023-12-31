import React from "react";
import { connect } from "react-redux";
import image from "../../assets/images/ava.jpg";

class ProfileHeaderCard extends React.Component {
  render() {
    const {firstname = 'Alizee', lastname = ' Thomas', email = 'polytechnique@gmail.com'} = this.props
    return (
      <div className="card profile-header">
        <div className="body">
          <div className="profile-image">
            <img alt="" className="rounded-circle" src={image} />
          </div>
          <div>
            <h4 className="m-b-0">
              <strong>{firstname}</strong> {lastname}
            </h4>
            <span>{email}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(ProfileHeaderCard);
