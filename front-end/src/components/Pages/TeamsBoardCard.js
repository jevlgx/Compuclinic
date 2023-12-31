import React from "react";
import { connect } from "react-redux";
import { ProgressBar, Dropdown } from "react-bootstrap";

class TeamsBoardCard extends React.Component {
  render() {
    const {
      teamName,
      ranking,
      images,
      projects,
      budget,
      progress,
      progressType,
      onPressDropdown,
      isDropdown,
    } = this.props;
    return (
      <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
        <div className="card">
          <div className="header">
            <h2>
              {teamName} <small>Ranking {ranking}</small>
            </h2>
            <Dropdown drop="down" className="header-dropdown">
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
                  <a>Another Action</a>
                </li>
                <li>
                  <a>Something else</a>
                </li>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="body">
            <h6 className="m-b-15">Info about Design Team 1</h6>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <ul className="list-unstyled team-info m-t-20">
              <li className="m-r-15">
                <small className="text-muted">Team</small>
              </li>
              {images.map((d, i) => {
                return (
                  <li key={"sdhds" + i}>
                    <img alt="Avatar" src={d} title="Avatar" />
                  </li>
                );
              })}
            </ul>
            <div style={{ marginBottom: 10 }}>
              <ProgressBar
                now={progress}
                variant={progressType}
                style={{ height: "5px" }}
              />
            </div>
            <div className="row">
              <div className="col-7">
                <small>PROJECTS: {projects}</small>
                <h6>BUDGET: {budget} USD</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(TeamsBoardCard);
