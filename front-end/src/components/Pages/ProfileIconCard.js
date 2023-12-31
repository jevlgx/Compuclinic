import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPerson, faWeight } from "@fortawesome/free-solid-svg-icons"

class ProfileIconCard extends React.Component {
  render() {
    const { gender = "Man", blood = "A+", weight = "60Kg", height = "1,71M" } = this.props;
    return (
      <div className="card">
          <div className="row profile_state">
              <div className="col-lg-3 col-6">
                  <div className="body">
                      <i className="fa fa-regular fa-venus-mars"></i>
                      <h5 className="m-b-0 number count-to" data-from="0" data-to="2365" data-speed="1000" data-fresh-interval="700">{gender}</h5>
                      <small>Gender</small>
                  </div>
              </div>
              <div className="col-lg-3 col-6">
                  <div className="body">
                      <i className="icon-drop"></i>
                      <h5 className="m-b-0 number count-to" data-from="0" data-to="1203" data-speed="1000" data-fresh-interval="700">{blood}</h5>
                      <small>Blood Group</small>
                  </div>
              </div>
              <div className="col-lg-3 col-6">
                  <div className="body">
                  <FontAwesomeIcon icon={faWeight} size="2xl" />
                      <h5 className="m-b-0 number count-to" data-from="0" data-to="324" data-speed="1000" data-fresh-interval="700">{weight}</h5>
                      <small>Weight</small>
                  </div>
              </div>
              <div className="col-lg-3 col-6">
                  <div className="body">
                  {/* <FontAwesomeIcon icon="fa-regular fa-person" /> */}
                  {/* <FontAwesomeIcon icon="fa-solid fa-person" /> */}
                  <FontAwesomeIcon icon={faPerson} size="2xl" />
                      <h5 className="m-b-0 number count-to" data-from="0" data-to="1980" data-speed="1000" data-fresh-interval="700">{height}</h5>
                      <small>Height</small>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(ProfileIconCard);
