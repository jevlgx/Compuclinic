import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { Dropdown } from "react-bootstrap";
import Department from "../../components/Forms/BasicValidation";
// import AdvancedValidation from "../../components/Forms/AdvancedValidation";

class Laboratin extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        style={{ flex: 1 }}
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="All Departments"
              Breadcrumb={[
                { name: "Departments", navigate: "" },
                { name: "Laboratin", navigate: "" },
              ]}
            />
            <div id="bacicTab3pan-3" className="tab-pane">
                          <div className="col-lg-12">
                          <div className="card">
                            <div className="body table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>NUMERO SERIE FIOLE</th>
                                    <th>ID CONSULTATION</th>
                                    <th>DATE DE CONSULTATION</th>
                                    <th>ACTION</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Messages
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        {" "}
                                        <i className="icon-settings"></i>Settings
                                      </Dropdown.Item>
                                      <li className="divider"></li>
                                      <Dropdown.Item href="login">
                                        {" "}
                                        <i className="icon-power"></i>Logout
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Messages
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        {" "}
                                        <i className="icon-settings"></i>Settings
                                      </Dropdown.Item>
                                      <li className="divider"></li>
                                      <Dropdown.Item href="login">
                                        {" "}
                                        <i className="icon-power"></i>Logout
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Messages
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        {" "}
                                        <i className="icon-settings"></i>Settings
                                      </Dropdown.Item>
                                      <li className="divider"></li>
                                      <Dropdown.Item href="login">
                                        {" "}
                                        <i className="icon-power"></i>Logout
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td>Jellybean</td>
                                    <td>@lajelly</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Messages
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        {" "}
                                        <i className="icon-settings"></i>Settings
                                      </Dropdown.Item>
                                      <li className="divider"></li>
                                      <Dropdown.Item href="login">
                                        {" "}
                                        <i className="icon-power"></i>Logout
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">5</th>
                                    <td>Larry</td>
                                    <td>Kikat</td>
                                    <td>@lakitkat</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Messages
                                      </Dropdown.Item>
                                      <Dropdown.Item>
                                        {" "}
                                        <i className="icon-settings"></i>Settings
                                      </Dropdown.Item>
                                      <li className="divider"></li>
                                      <Dropdown.Item href="login">
                                        {" "}
                                        <i className="icon-power"></i>Logout
                                      </Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        </div>
            {/*<div className="row clearfix">
              <AdvancedValidation />
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(Laboratin);
