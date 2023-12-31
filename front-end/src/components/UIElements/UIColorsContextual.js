import React from "react";
import { connect } from "react-redux";

class UIColorsContextual extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Contextual text Colors</h2>
          </div>
          <div className="body">
            <p>
              classes also work well on anchors with the provided hover and
              focus states.{" "}
              <strong>
                Note that the{" "}
                <code className="highlighter-rouge">.text-white</code> and{" "}
                <code className="highlighter-rouge">.text-muted</code> class has
                no link styling.
              </strong>
            </p>
            <p>
              <a className="text-primary">Primary link</a>
            </p>
            <p>
              <a className="text-secondary">Secondary link</a>
            </p>
            <p>
              <a className="text-success">Success link</a>
            </p>
            <p>
              <a className="text-danger">Danger link</a>
            </p>
            <p>
              <a className="text-warning">Warning link</a>
            </p>
            <p>
              <a className="text-info">Info link</a>
            </p>
            <p>
              <a className="text-light bg-dark">Light link</a>
            </p>
            <p>
              <a className="text-dark">Dark link</a>
            </p>
            <p>
              <a className="text-muted">Muted link</a>
            </p>
            <p>
              <a className="text-white bg-dark">White link</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIColorsContextual);
