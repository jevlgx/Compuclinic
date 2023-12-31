import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

class BorderColor extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="header">
            <h2>Border Color</h2>
            <Dropdown as="ul" className="header-dropdown">
              <Dropdown.Toggle variant="success" as="li" id="dropdown-basic">
                <Dropdown.Menu
                  as="ul"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <li>
                    <a>Action</a>
                  </li>
                  <li>
                    <a>Another Action</a>
                  </li>
                  <li>
                    <a>Something else</a>
                  </li>
                </Dropdown.Menu>
              </Dropdown.Toggle>
            </Dropdown>
          </div>
          <div className="body">
            <div className="bd-example">
              <img
                alt="75x75"
                className="border border-primary"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="border border-secondary"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="border border-success"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="border border-danger"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="border border-warning"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="border border-info"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="border border-dark"
                src="http://via.placeholder.com/75x75"
              />
            </div>
            <figure className="highlight">
              <pre>
                <code className="language-html" data-lang="html">
                  <br />
                  <span className="nt">&lt;span</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"border border-primary"</span>
                  <span className="nt">&gt;&lt;/span&gt;</span>
                  <br />
                  <span className="nt">&lt;span</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"border border-secondary"</span>
                  <span className="nt">&gt;&lt;/span&gt;</span>
                  <br />
                  <span className="nt">&lt;span</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"border border-success"</span>
                  <span className="nt">&gt;&lt;/span&gt;</span>
                  <br />
                  <span className="nt">&lt;span</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"border border-danger"</span>
                  <span className="nt">&gt;&lt;/span&gt;</span>
                  <br />
                  <span className="nt">&lt;span</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"border border-warning"</span>
                  <span className="nt">&gt;&lt;/span&gt;</span>
                  <br />
                  <span className="nt">&lt;span</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"border border-info"</span>
                  <span className="nt">&gt;&lt;/span&gt;</span>
                  <br />
                  <span className="nt">&lt;span</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"border border-light"</span>
                  <span className="nt">&gt;&lt;/span&gt;</span>
                  <br />
                  <span className="nt">&lt;span</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"border border-dark"</span>
                  <span className="nt">&gt;&lt;/span&gt;</span>
                  <br />
                  <span className="nt">&lt;span</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"border border-white"</span>
                  <span className="nt">&gt;&lt;/span&gt;</span>
                  <br />
                </code>
              </pre>
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BorderColor);
