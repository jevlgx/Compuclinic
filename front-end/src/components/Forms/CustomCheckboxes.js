import React from "react";
import { connect } from "react-redux";

class CustomCheckboxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fancyCheck: true,
      female: true,
      female1: true,
    };
  }
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Custom Checkboxes and Radio Buttons</h2>
        </div>
        <div className="body">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="fancy-checkbox">
                <label>
                  <input type="checkbox" />
                  <span>Fancy Checkbox 1</span>
                </label>
              </div>
              <div className="fancy-checkbox">
                <label>
                  <input type="checkbox" />
                  <span>Fancy Checkbox 2</span>
                </label>
              </div>
              <div className="fancy-checkbox">
                <label>
                  <input type="checkbox" />
                  <span>Fancy Checkbox 3</span>
                </label>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="fancy-radio">
                <label>
                  <input name="gender" type="radio" value="male" />
                  <span>
                    <i></i>Male
                  </span>
                </label>
              </div>
              <div className="fancy-radio">
                <label>
                  <input name="gender" type="radio" value="female" />
                  <span>
                    <i></i>Female
                  </span>
                </label>
              </div>
              <br />
              <label className="fancy-radio">
                <input name="gender2" type="radio" value="male" />
                <span>
                  <i></i>Male
                </span>
              </label>
              <label className="fancy-radio">
                <input name="gender2" type="radio" value="female" />
                <span>
                  <i></i>Female
                </span>
              </label>
              <br />
              <label className="fancy-radio custom-color-green">
                <input name="gender3" type="radio" value="male" />
                <span>
                  <i></i>Male
                </span>
              </label>
              <label className="fancy-radio custom-color-green">
                <input name="gender3" type="radio" value="female" />
                <span>
                  <i></i>Female
                </span>
              </label>
              <br />
              <label className="fancy-radio custom-color-green">
                <input name="gender4" type="radio" value="male" />
                <span>
                  <i></i>Male
                </span>
              </label>
              <label className="fancy-radio custom-color-green">
                <input name="gender4" type="radio" value="female" />
                <span>
                  <i></i>Female
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(CustomCheckboxes);
