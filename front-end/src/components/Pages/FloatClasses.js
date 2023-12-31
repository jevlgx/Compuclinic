import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";

class FloatClasses extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>Float Classes</h2>
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
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-nowrap" width="150">
                      Class
                    </th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap">
                      <code>.float-left</code>
                    </td>
                    <td>Element to the left (float:left).</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">
                      <code>.float-right</code>
                    </td>
                    <td>Element to the right(float:right).</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">
                      <code>.clearfix</code>
                    </td>
                    <td>To Clear floats.(clreafix)</td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-nowrap" width="150">
                      Class
                    </th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-nowrap">
                      <code>.displayblock</code>
                    </td>
                    <td>Element to Show (display: block)</td>
                  </tr>
                  <tr>
                    <td className="text-nowrap">
                      <code>.displaynone</code>
                    </td>
                    <td>Element to hide (display: none)</td>
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

export default connect(mapStateToProps, {})(FloatClasses);
