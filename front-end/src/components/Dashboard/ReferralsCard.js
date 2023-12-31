import React from "react";
import { connect } from "react-redux";
import { ProgressBar, Dropdown } from "react-bootstrap";
import PropTypes from "prop-types";
import { onPressReferralsDropDown } from "../../actions";

class ReferralsCard extends React.Component {
  render() {
    const { referralsDropDown } = this.props;
    return (
      <div className="card">
        <div className="header">
          <h2>Gain (ventes) from Hospital</h2>
          {/* <Dropdown as="ul" className="header-dropdown">
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
          </Dropdown> */}
        </div>
        <div className="body">
          <ul className="list-unstyled list-referrals">
            <li>
              <p>
                <span className="value">23 000 Fcfa</span>
                <span className="text-muted float-right">
                  Medicaments
                </span>
              </p>
              <ProgressBar
                className="progress progress-xs progress-transparent custom-color-blue"
                now={87}
                min={0}
                max={100}
              />
            </li>
            <li>
              <p>
                <span className="value">7000 Fcfa</span>
                <span className="text-muted float-right">
                  Consultations payées
                </span>
              </p>

              <ProgressBar
                className="progress progress-xs progress-transparent custom-color-purple"
                now={34}
              />
            </li>
            <li>
              <p>
                <span className="value">8000 Fcfa</span>
                <span className="text-muted float-right">
                  Pour les internements
                </span>
              </p>

              <ProgressBar
                className="progress progress-xs progress-transparent custom-color-yellow"
                now={45}
              />
            </li>
            <li>
              <p>
                <span className="value">24 000 Fcfa</span>
                <span className="text-muted float-right">
                  Autres
                </span>
              </p>
              <ProgressBar
                className="progress progress-xs progress-transparent custom-color-green"
                now={32}
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ReferralsCard.propTypes = {
  onPressReferralsDropDown: PropTypes.func.isRequired,
};

const mapStateToProps = ({ analyticalReducer }) => ({
  referralsDropDown: analyticalReducer.referralsDropDown,
});

export default connect(mapStateToProps, {
  onPressReferralsDropDown,
})(ReferralsCard);
