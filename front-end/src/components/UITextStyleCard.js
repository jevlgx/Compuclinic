import React from "react";
import { connect } from "react-redux";

class UITextStyleCard extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Text Style</h2>
          </div>
          <div className="body">
            <p className="text-muted">
              <code>.text-muted</code> Convey meaning through color with a
              handful of emphasis utility classes.
            </p>
            <p className="text-primary">
              <code>.text-primary</code> Convey meaning through color with a
              handful of emphasis utility classes.
            </p>
            <p className="text-success">
              <code>.text-success</code> Convey meaning through color with a
              handful of emphasis utility classes.
            </p>
            <p className="text-info">
              <code>.text-info</code> Convey meaning through color with a
              handful of emphasis utility classes.
            </p>
            <p className="text-warning">
              <code>.text-warning</code> Convey meaning through color with a
              handful of emphasis utility classes.
            </p>
            <p className="text-danger">
              <code>.text-danger</code> Convey meaning through color with a
              handful of emphasis utility classes.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UITextStyleCard);
