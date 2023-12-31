import React from "react";
import { connect } from "react-redux";

class UIBootstrapAlertMessageWithLink extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Alert Messages with Link</h2>
          </div>
          <div className="body">
            <div className="alert alert-primary" role="alert">
              A simple primary alert with{" "}
              <a className="alert-link">an example link</a>. Give it a click if
              you like.
            </div>
            <div className="alert alert-secondary" role="alert">
              A simple secondary alert with{" "}
              <a className="alert-link">an example link</a>. Give it a click if
              you like.
            </div>
            <div className="alert alert-success" role="alert">
              A simple success alert with{" "}
              <a className="alert-link">an example link</a>. Give it a click if
              you like.
            </div>
            <div className="alert alert-danger" role="alert">
              A simple danger alert with{" "}
              <a className="alert-link">an example link</a>. Give it a click if
              you like.
            </div>
            <div className="alert alert-warning" role="alert">
              A simple warning alert with{" "}
              <a className="alert-link">an example link</a>. Give it a click if
              you like.
            </div>
            <div className="alert alert-info" role="alert">
              A simple info alert with{" "}
              <a className="alert-link">an example link</a>. Give it a click if
              you like.
            </div>
            <div className="alert alert-light" role="alert">
              A simple light alert with{" "}
              <a className="alert-link">an example link</a>. Give it a click if
              you like.
            </div>
            <div className="alert alert-dark" role="alert">
              A simple dark alert with{" "}
              <a className="alert-link">an example link</a>. Give it a click if
              you like.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIBootstrapAlertMessageWithLink);
