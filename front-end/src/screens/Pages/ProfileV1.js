import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { Tabs, Tab } from "react-bootstrap";
import ProfileV1Setting from "../../components/Pages/ProfileV1Setting";

class ProfileV1Page extends React.Component {
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
              HeaderText="User Profile v1"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Profile V1", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="body">
                    <Tabs
                      defaultActiveKey="settings"
                      id="uncontrolled-tab-example"
                    >
                      <Tab eventKey="settings" title="settings">
                        <ProfileV1Setting />
                      </Tab>
                      <Tab eventKey="Billing" title="Billing">
                        <div className="tab-pane active show" id="billings">
                          <div className="body">
                            <h6>Payment Method</h6>
                            <div className="payment-info">
                              <h3 className="payment-name">
                                <i className="fa fa-paypal"></i> PayPal ****2222
                              </h3>
                              <span>Next billing charged $29</span>
                              <br />
                              <em className="text-muted">
                                Autopay on May 12, 2018
                              </em>
                              <a className="edit-payment-info">
                                Edit Payment Info
                              </a>
                            </div>
                            <p className="margin-top-30">
                              <a>
                                <i className="fa fa-plus-circle"></i> Add
                                Payment Info
                              </a>
                            </p>
                          </div>

                          <div className="body">
                            <h6>Billing History</h6>
                            <table className="table billing-history">
                              <thead className="sr-only">
                                <tr>
                                  <th>Plan</th>
                                  <th>Amount</th>
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h3 className="billing-title">
                                      Basic Plan{" "}
                                      <span className="invoice-number">
                                        #LA35628
                                      </span>
                                    </h3>
                                    <span className="text-muted">
                                      Charged at April 17, 2018
                                    </span>
                                  </td>
                                  <td className="amount">$29</td>
                                  <td className="action">
                                    <a>View</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3 className="billing-title">
                                      Pro Plan{" "}
                                      <span className="invoice-number">
                                        #LA3599
                                      </span>
                                    </h3>
                                    <span className="text-muted">
                                      Charged at March 18, 2018
                                    </span>
                                  </td>
                                  <td className="amount">$59</td>
                                  <td className="action">
                                    <a>View</a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h3 className="billing-title">
                                      Platinum Plan{" "}
                                      <span className="invoice-number">
                                        #LA1245
                                      </span>
                                    </h3>
                                    <span className="text-muted">
                                      Charged at Feb 02, 2018
                                    </span>
                                  </td>
                                  <td className="amount">$89</td>
                                  <td className="action">
                                    <a>View</a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <button type="button" className="btn btn-primary">
                              Update
                            </button>
                            <button type="button" className="btn btn-default">
                              Cancel
                            </button>
                          </div>
                        </div>
                      </Tab>
                      <Tab eventKey="Preferences" title="Preferences">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-12">
                            <div className="body">
                              <h6>Your Login Sessions</h6>
                              <ul className="list-unstyled list-login-session">
                                <li>
                                  <div className="login-session">
                                    <i className="fa fa-laptop device-icon"></i>
                                    <div className="login-info">
                                      <h3 className="login-title">
                                        Mac - New York, United States
                                      </h3>
                                      <span className="login-detail">
                                        Chrome -{" "}
                                        <span className="text-success">
                                          Active Now
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="login-session">
                                    <i className="fa fa-desktop device-icon"></i>
                                    <div className="login-info">
                                      <h3 className="login-title">
                                        Windows 10 - New York, United States
                                      </h3>
                                      <span className="login-detail">
                                        Firefox - about an hour ago
                                      </span>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-link btn-logout"
                                      data-container="body"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Close this login session"
                                    >
                                      <i className="fa fa-times-circle text-danger"></i>
                                    </button>
                                  </div>
                                </li>
                                <li>
                                  <div className="login-session">
                                    <i className="fa fa-mobile fa-fw device-icon"></i>
                                    <div className="login-info">
                                      <h3 className="login-title">
                                        Android - New York, United States
                                      </h3>
                                      <span className="login-detail">
                                        Android Browser - yesterday
                                      </span>
                                    </div>
                                    <button
                                      type="button"
                                      className="btn btn-link btn-logout"
                                      data-container="body"
                                      data-toggle="tooltip"
                                      title=""
                                      data-original-title="Close this login session"
                                    >
                                      <i className="fa fa-times-circle text-danger"></i>
                                    </button>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <div className="body">
                              <h6>Connected Social Media</h6>
                              <ul className="list-unstyled list-connected-app">
                                <li>
                                  <div className="connected-app">
                                    <i className="fa fa-facebook app-icon"></i>
                                    <div className="connection-info">
                                      <h3 className="app-title">FaceBook</h3>
                                      <span className="actions">
                                        <a>View Permissions</a>{" "}
                                        <a className="text-danger">
                                          Revoke Access
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="connected-app">
                                    <i className="fa fa-twitter app-icon"></i>
                                    <div className="connection-info">
                                      <h3 className="app-title">Twitter</h3>
                                      <span className="actions">
                                        <a>View Permissions</a>{" "}
                                        <a className="text-danger">
                                          Revoke Access
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="connected-app">
                                    <i className="fa fa-instagram app-icon"></i>
                                    <div className="connection-info">
                                      <h3 className="app-title">Instagram</h3>
                                      <span className="actions">
                                        <a>View Permissions</a>{" "}
                                        <a className="text-danger">
                                          Revoke Access
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="connected-app">
                                    <i className="fa fa-linkedin app-icon"></i>
                                    <div className="connection-info">
                                      <h3 className="app-title">Linkedin</h3>
                                      <span className="actions">
                                        <a>View Permissions</a>{" "}
                                        <a className="text-danger">
                                          Revoke Access
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="connected-app">
                                    <i className="fa fa-vimeo app-icon"></i>
                                    <div className="connection-info">
                                      <h3 className="app-title">Vimeo</h3>
                                      <span className="actions">
                                        <a>View Permissions</a>{" "}
                                        <a className="text-danger">
                                          Revoke Access
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
});

export default connect(mapStateToProps, {})(ProfileV1Page);
