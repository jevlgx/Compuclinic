import React from "react";
import { connect } from "react-redux";
import { Figure } from "react-bootstrap";
import { onPressCloseAlert } from "../../actions";

class UIBootstrapPosition extends React.Component {
  render() {
    return (
      <div className="row clearfix">
        <div className="col-lg-12">
          <div className="card">
            <div className="header">
              <h2>Position</h2>
            </div>
            <div className="body">
              <h6>Common values</h6>
              <Figure className="highlight">
                <pre>
                  <code className="language-html" data-lang="html">
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">"position-static"</span>
                    <span className="nt">&gt;</span>...
                    <span className="nt">&lt;/div&gt;</span>
                    <br />
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">"position-relative"</span>
                    <span className="nt">&gt;</span>...
                    <span className="nt">&lt;/div&gt;</span>
                    <br />
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">"position-absolute"</span>
                    <span className="nt">&gt;</span>...
                    <span className="nt">&lt;/div&gt;</span>
                    <br />
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">"position-fixed"</span>
                    <span className="nt">&gt;</span>...
                    <span className="nt">&lt;/div&gt;</span>
                    <br />
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">"position-sticky"</span>
                    <span className="nt">&gt;</span>...
                    <span className="nt">&lt;/div&gt;</span>
                  </code>
                </pre>
              </Figure>
              <hr />
              <h6>Sticky top</h6>
              <Figure className="highlight">
                <pre>
                  <code className="language-html" data-lang="html">
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">"sticky-top"</span>
                    <span className="nt">&gt;</span>...
                    <span className="nt">&lt;/div&gt;</span>
                  </code>
                </pre>
              </Figure>
              <div className="p-3 mb-2 bg-primary text-white sticky-top">
                .sticky-top
              </div>
              <hr />
              <h6>Fixed top</h6>
              <Figure className="highlight">
                <pre>
                  <code className="language-html" data-lang="html">
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">"fixed-bottom"</span>
                    <span className="nt">&gt;</span>...
                    <span className="nt">&lt;/div&gt;</span>
                  </code>
                </pre>
              </Figure>
              <hr />
              <h6>Fixed bottom</h6>
              <Figure className="highlight">
                <pre>
                  <code className="language-html" data-lang="html">
                    <span className="nt">&lt;div</span>{" "}
                    <span className="na">className=</span>
                    <span className="s">"fixed-bottom"</span>
                    <span className="nt">&gt;</span>...
                    <span className="nt">&lt;/div&gt;</span>
                  </code>
                </pre>
              </Figure>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({
  alertData: UIElementsReducer.alertData,
});

export default connect(mapStateToProps, {
  onPressCloseAlert,
})(UIBootstrapPosition);
