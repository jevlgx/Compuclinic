import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

class ProfileInfoCard extends React.Component {
  render() {
    const {
      address = '795 Folsom Ave, Suite 600 San Francisco, 94107',
      email = 'polytechnique@gmail.com',
      phone = '+ 202-555-2828',
      birth_date = 'October 22th, 1990',
      social_facebook = 'twitter.com/',
      social_twitter = 'facebook.com/',
    } = this.props
    return (
      <div className="card">
        <div className="header">
          <h2>Info</h2>
          
          <Dropdown as="ul" className="header-dropdown">
            
            <Dropdown.Toggle variant="success" as="li" id="dropdown-basic">
              <Dropdown.Menu
                as="ul"
                className="dropdown-menu dropdown-menu-right"
              >
                <li>
                  <a>Edit</a>
                </li>
                <li>
                  <a>Send Mail</a>
                </li>
                <li>
                  <a>Suspend</a>
                </li>
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
        </div>
        <div className="body">
          <small className="text-muted">Address: </small>
          <p>{address}</p>
          <div></div>
          <hr />
          <small className="text-muted">Email address: </small>
          <p>{email}</p>
          <hr />
          <small className="text-muted">Mobile: </small>
          <p>{phone}</p>
          <hr />
          <small className="text-muted">Birth Date: </small>
          <p className="m-b-0">{birth_date}</p>
          <hr />
          <small className="text-muted">Social: </small>
          <p>
            <i className="fa fa-twitter m-r-5"></i> {social_twitter}
          </p>
          <p>
            <i className="fa fa-facebook m-r-5"></i> {social_facebook}
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(ProfileInfoCard);
