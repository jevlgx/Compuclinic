import React from "react";
import { connect } from "react-redux";
import { ProgressBar } from "react-bootstrap";

class UIOtherProgressBar extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>
              Progress Bars{" "}
              <small>Progress Bars based on Bootstrap-Progressbar plugin</small>
            </h2>
          </div>
          <div className="body">
            <div style={{ marginBottom: 10 }}>
              <h6>Percentage Format</h6>
              <ProgressBar now={25} label={`25%`} />
            </div>
            <div style={{ marginBottom: 10 }}>
              <h6>Number Format</h6>
              <ProgressBar now={41} label={`41/100`} />
            </div>
            <div style={{ marginBottom: 10 }}>
              <h6>Custom Format</h6>
              <ProgressBar now={77} label={`77 of 100`} />
            </div>
            <hr></hr>
            <div style={{ marginBottom: 10 }}>
              <h6>Other Style</h6>
              <ProgressBar now={43} animated label={`43%`} variant="warning" />
            </div>
            <div style={{ marginBottom: 10 }}>
              <ProgressBar
                now={67}
                animated
                label={`67%`}
                variant="danger"
                className="progress"
              />
            </div>
            <div style={{ marginBottom: 10 }}>
              <ProgressBar
                now={50}
                animated
                variant="success"
                className="progress"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(UIOtherProgressBar);
