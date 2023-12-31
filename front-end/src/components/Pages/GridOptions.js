import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

class GridOptions extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="header">
            <h2>Grid options</h2>
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
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th></th>
                    <th className="text-center">
                      {" "}
                      Extra small
                      <br />
                      <small>&lt;576px</small>
                    </th>
                    <th className="text-center">
                      {" "}
                      Small
                      <br />
                      <small>≥576px</small>
                    </th>
                    <th className="text-center">
                      {" "}
                      Medium
                      <br />
                      <small>≥768px</small>
                    </th>
                    <th className="text-center">
                      {" "}
                      Large
                      <br />
                      <small>≥992px</small>
                    </th>
                    <th className="text-center">
                      {" "}
                      Extra large
                      <br />
                      <small>≥1200px</small>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Max container width
                    </th>
                    <td>None (auto)</td>
                    <td>540px</td>
                    <td>720px</td>
                    <td>960px</td>
                    <td>1140px</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Class prefix
                    </th>
                    <td>
                      <code>.col-</code>
                    </td>
                    <td>
                      <code>.col-sm-</code>
                    </td>
                    <td>
                      <code>.col-md-</code>
                    </td>
                    <td>
                      <code>.col-lg-</code>
                    </td>
                    <td>
                      <code>.col-xl-</code>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      # of columns
                    </th>
                    <td>12</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Gutter width
                    </th>
                    <td>30px (15px on each side of a column)</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Nestable
                    </th>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <th className="text-nowrap" scope="row">
                      Column ordering
                    </th>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(GridOptions);
