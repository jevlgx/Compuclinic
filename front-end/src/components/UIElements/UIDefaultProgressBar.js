import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";

class UIDefaultProgressBar extends React.Component {
  render() {
    const { progressBarDefault, progressBarSizes } = this.props;
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>Default Progress Bars</h2>
          </div>
          <div className="body">
            {progressBarDefault.map((d, i) => {
              return (
                <div style={{ marginBottom: 10 }} key={"jdfsvhu" + i}>
                  <ProgressBar
                    className="progress"
                    variant={d.variant}
                    now={d.value}
                  />
                </div>
              );
            })}
            <hr />
            <h6>Sizes</h6>
            {progressBarSizes.map((d, i) => {
              return (
                <div style={{ marginBottom: 10 }} key={"nimiltplwio" + i}>
                  <ProgressBar
                    className={d.class}
                    variant={d.variant}
                    now={d.value}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({
  progressBarDefault: UIElementsReducer.progressBarDefault,
  progressBarSizes: UIElementsReducer.progressBarSizes,
});

export default connect(mapStateToProps, {})(UIDefaultProgressBar);
