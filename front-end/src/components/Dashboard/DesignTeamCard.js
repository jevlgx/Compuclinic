import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
import avatar1 from "../../assets/images/xs/avatar1.jpg";
import avatar2 from "../../assets/images/xs/avatar2.jpg";
import avatar3 from "../../assets/images/xs/avatar3.jpg";
import avatar4 from "../../assets/images/xs/avatar4.jpg";
import avatar5 from "../../assets/images/xs/avatar5.jpg";

class DesignTeamCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>
            DS - Design Team <small>Ranking 2th</small>
          </h2>
          <Dropdown drop="down" className="header-dropdown dropdown">
            <Dropdown.Toggle
              variant="success"
              as="li"
              id="dropdown-basic"
            ></Dropdown.Toggle>

            <Dropdown.Menu as="ul">
              <li>
                <a>Action</a>
              </li>
              <li>
                <a>Another action</a>
              </li>
              <li>
                <a>Something else</a>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="body">
          <h6 className="m-b-15">
            Info about Design Team{" "}
            <span className="badge badge-success float-right">New</span>
          </h6>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <ul className="list-unstyled team-info m-t-20">
            <li className="m-r-15">
              <small className="text-muted">Team</small>
            </li>
            <li>
              <img src={avatar1} title="Avatar" alt="Avatar" />
            </li>
            <li>
              <img src={avatar2} title="Avatar" alt="Avatar" />
            </li>
            <li>
              <img src={avatar3} title="Avatar" alt="Avatar" />
            </li>
            <li>
              <img src={avatar4} title="Avatar" alt="Avatar" />
            </li>
            <li>
              <img src={avatar5} title="Avatar" alt="Avatar" />
            </li>
          </ul>
          <div className="progress progress-xs progress-transparent custom-color-blue">
            <div className="progress-bar" data-transitiongoal="87"></div>
          </div>
          <div className="row">
            <div className="col-7">
              <small>PROJECTS: 12</small>
              <h6>BUDGET: 4,870 USD</h6>
            </div>
            <div className="col-5">
              <div
                className="sparkline text-right m-t-10"
                data-type="bar"
                data-width="97%"
                data-height="26px"
              >
                2,5,8,3,5,7,1,6
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DesignTeamCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(DesignTeamCard);
