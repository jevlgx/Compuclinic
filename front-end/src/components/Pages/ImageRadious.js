import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

class ImageRadious extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="header">
            <h2>Image Radious</h2>
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
            <div className="bd-example bd-example-images">
              <img
                alt="75x75"
                className="rounded"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="rounded-top"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="rounded-right"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="rounded-bottom"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="rounded-left"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="rounded-circle"
                src="http://via.placeholder.com/75x75"
              />
              <img
                alt="75x75"
                className="rounded-0"
                src="http://via.placeholder.com/75x75"
              />
            </div>
            <figure className="highlight">
              <pre>
                <code className="language-html" data-lang="html">
                  <br />
                  <span className="nt">&lt;img</span>{" "}
                  <span className="na">src=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">alt=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"rounded"</span>
                  <span className="nt">&gt;</span>
                  <br />
                  <span className="nt">&lt;img</span>{" "}
                  <span className="na">src=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">alt=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"rounded-top"</span>
                  <span className="nt">&gt;</span>
                  <br />
                  <span className="nt">&lt;img</span>{" "}
                  <span className="na">src=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">alt=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"rounded-right"</span>
                  <span className="nt">&gt;</span>
                  <br />
                  <span className="nt">&lt;img</span>{" "}
                  <span className="na">src=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">alt=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"rounded-bottom"</span>
                  <span className="nt">&gt;</span>
                  <br />
                  <span className="nt">&lt;img</span>{" "}
                  <span className="na">src=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">alt=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"rounded-left"</span>
                  <span className="nt">&gt;</span>
                  <br />
                  <span className="nt">&lt;img</span>{" "}
                  <span className="na">src=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">alt=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"rounded-circle"</span>
                  <span className="nt">&gt;</span>
                  <br />
                  <span className="nt">&lt;img</span>{" "}
                  <span className="na">src=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">alt=</span>
                  <span className="s">"..."</span>{" "}
                  <span className="na">className=</span>
                  <span className="s">"rounded-0"</span>
                  <span className="nt">&gt;</span>
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

export default connect(mapStateToProps, {})(ImageRadious);
