import React from "react";
import { connect } from "react-redux";

class UIBootstrapLabels extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>Labels</h2>
          </div>
          <div className="body">
            <p>
              We restyled the default options for labels and we added the filled
              class, that can be used in any combination.
            </p>
            <span className="badge badge-default">Default</span>
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-info">Info</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-danger">Danger</span>
            <hr />
            <pre className="prettyprint prettyprinted">
              <span className="tag">&lt;span</span>
              <span className="pln"> </span>
              <span className="atn">class</span>
              <span className="pun">=</span>
              <span className="atv">"badge badge-default"</span>
              <span className="tag">&gt;</span>
              <span className="pln">Default</span>
              <span className="tag">&lt;/span&gt;</span>
              <span className="pln"></span>
              <br />
              <span className="tag">&lt;span</span>
              <span className="pln"> </span>
              <span className="atn">class</span>
              <span className="pun">=</span>
              <span className="atv">"badge badge-primary"</span>
              <span className="tag">&gt;</span>
              <span className="pln">Primary</span>
              <span className="tag">&lt;/span&gt;</span>
              <span className="pln"></span>
              <br />
              <span className="tag">&lt;span</span>
              <span className="pln"> </span>
              <span className="atn">class</span>
              <span className="pun">=</span>
              <span className="atv">"badge badge-success"</span>
              <span className="tag">&gt;</span>
              <span className="pln">Success</span>
              <span className="tag">&lt;/span&gt;</span>
              <span className="pln"></span>
              <span className="tag">&lt;span</span>
              <span className="pln"> </span>
              <span className="atn">class</span>
              <span className="pun">=</span>
              <span className="atv">"badge badge-info"</span>
              <span className="tag">&gt;</span>
              <span className="pln">Info</span>
              <span className="tag">&lt;/span&gt;</span>
              <span className="pln"></span>
              <span className="tag">&lt;span</span>
              <span className="pln"> </span>
              <span className="atn">class</span>
              <span className="pun">=</span>
              <span className="atv">"badge badge-warning"</span>
              <span className="tag">&gt;</span>
              <span className="pln">Warning</span>
              <span className="tag">&lt;/span&gt;</span>
              <span className="pln"></span>
              <span className="tag">&lt;span</span>
              <span className="pln"> </span>
              <span className="atn">class</span>
              <span className="pun">=</span>
              <span className="atv">"badge badge-danger"</span>
              <span className="tag">&gt;</span>
              <span className="pln">Danger</span>
              <span className="tag">&lt;/span&gt;</span>
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIBootstrapLabels);
