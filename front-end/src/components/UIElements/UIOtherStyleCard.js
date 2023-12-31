import React from "react";
import { connect } from "react-redux";

class UIOtherStyleCard extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Other Style</h2>
          </div>
          <div className="body">
            <p>
              You can use the mark tag to
              <mark>highlight</mark> text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p className="text-lowercase">
              <code>.text-lowercase</code> Lowercased text.
            </p>
            <p className="text-uppercase">
              <code className="text-lowercase">.text-uppercase</code> Uppercased
              text.
            </p>
            <p className="text-capitalize">
              <code className="text-lowercase">.text-capitalized</code>{" "}
              Capitalized text.
            </p>
            <p>
              Make a paragraph stand out by adding <code>.lead</code>
            </p>
            <p className="lead">
              Objectively re-engineer maintainable total linkage after proactive
              intellectual capital. Dynamically evolve best-of-breed e-services
              for user-centric customer.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIOtherStyleCard);
