import React from "react";
import { connect } from "react-redux";

class UIBootstrapShadows extends React.Component {
  render() {
    return (
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Shadows</h2>
            </div>
            <div className="body">
              <div className="shadow-none p-3 mb-5 bg-light rounded">
                No shadow
              </div>
              <div className="shadow-sm p-3 mb-5 bg-white rounded">
                Small shadow
              </div>
              <div className="shadow p-3 mb-5 bg-white rounded">
                Regular shadow
              </div>
              <div className="shadow-lg p-3 mb-5 bg-white rounded">
                Larger shadow
              </div>
              <figure className="highlight">
                <pre>
                  <code className="language-html" data-lang="html">
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">
                      "shadow-none p-3 mb-5 bg-light rounded"
                    </span>
                    <span className="nt">&gt;</span>No shadow
                    <span className="nt">&lt;/div&gt;</span>
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">
                      "shadow-sm p-3 mb-5 bg-white rounded"
                    </span>
                    <span className="nt">&gt;</span>Small shadow
                    <span className="nt">&lt;/div&gt;</span>
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">
                      "shadow p-3 mb-5 bg-white rounded"
                    </span>
                    <span className="nt">&gt;</span>Regular shadow
                    <span className="nt">&lt;/div&gt;</span>
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">
                      "shadow-lg p-3 mb-5 bg-white rounded"
                    </span>
                    <span className="nt">&gt;</span>Larger shadow
                    <span className="nt">&lt;/div&gt;</span>
                  </code>
                </pre>
              </figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIBootstrapShadows);
