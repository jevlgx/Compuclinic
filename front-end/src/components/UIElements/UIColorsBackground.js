import React from "react";
import { connect } from "react-redux";

class UIColorsBackground extends React.Component {
  render() {
    return (
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12">
          <div className="card">
            <div className="header">
              <h2>Background color</h2>
            </div>
            <div className="body">
              <p>
                Similar to the contextual text color classes, easily set the
                background of an element to any contextual class. Anchor
                components will darken on hover, just like the text classes.
                Background utilities{" "}
                <strong>
                  do not set <code className="highlighter-rouge">color</code>
                </strong>
                , so in some cases you’ll want to use{" "}
                <code className="highlighter-rouge">.text-*</code> utilities.
              </p>
              <div className="p-3 mb-2 bg-primary text-white">.bg-primary</div>
              <div className="p-3 mb-2 bg-secondary text-white">
                .bg-secondary
              </div>
              <div className="p-3 mb-2 bg-success text-white">.bg-success</div>
              <div className="p-3 mb-2 bg-danger text-white">.bg-danger</div>
              <div className="p-3 mb-2 bg-warning text-dark">.bg-warning</div>
              <div className="p-3 mb-2 bg-info text-white">.bg-info</div>
              <div className="p-3 mb-2 bg-light text-dark">.bg-light</div>
              <div className="p-3 mb-2 bg-dark text-white">.bg-dark</div>
              <div className="p-3 mb-2 bg-white text-dark">.bg-white</div>
              <div className="p-3 mb-2 bg-transparent text-dark">
                .bg-transparent
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIColorsBackground);
