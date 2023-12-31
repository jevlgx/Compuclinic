import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";

class InvoicesV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: false,
    };
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { tab } = this.state;
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
              HeaderText="Invoices 2"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Invoices 2", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-12">
                <div className="card">
                  <div className="header">
                    <h2>Single Invoice</h2>
                    <ul className="header-dropdown">
                      <li className="dropdown">
                        <a
                          aria-expanded="false"
                          aria-haspopup="true"
                          className="dropdown-toggle"
                          data-toggle="dropdown"
                          role="button"
                        ></a>
                        <ul className="dropdown-menu dropdown-menu-right">
                          <li>
                            <a>Print Invoices</a>
                          </li>
                          <li className="divider" role="presentation"></li>
                          <li>
                            <a>Export to XLS</a>
                          </li>
                          <li>
                            <a>Export to CSV</a>
                          </li>
                          <li>
                            <a>Export to XML</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="body">
                    <h3>
                      Invoice Details :{" "}
                      <strong className="text-primary">#A0089</strong>
                    </h3>
                    <ul className="nav nav-tabs-new2">
                      <li className="nav-item inlineblock">
                        <a
                          className={`nav-link ${!tab && "active"}`}
                          fragment="details"
                          onClick={() => {
                            this.setState({ tab: false });
                          }}
                        >
                          Details
                        </a>
                      </li>
                      <li className="nav-item inlineblock">
                        <a
                          className={`nav-link ${tab && "active"}`}
                          fragment="history"
                          onClick={() => {
                            this.setState({ tab: true });
                          }}
                        >
                          History
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div className={`tab-pane ${!tab && "active"}`}>
                        <div className="row clearfix">
                          <div className="col-md-6 col-sm-6">
                            <address>
                              <strong>ThemeMakker Inc.</strong>
                              <br /> 795 Folsom Ave, Suite 546
                              <br /> San Francisco, CA 54656
                              <br />
                              <abbr title="Phone">P:</abbr> (123) 456-34636{" "}
                            </address>
                          </div>
                          <div className="col-md-6 col-sm-6 text-right">
                            <p className="m-b-0">
                              <strong>Order Date: </strong> Jun 15, 2018
                            </p>
                            <p className="m-b-0">
                              <strong>Order Status: </strong>
                              <span className="badge badge-warning m-b-0">
                                Pending
                              </span>
                            </p>
                            <p>
                              <strong>Order ID: </strong> #123456
                            </p>
                          </div>
                        </div>
                        <div className="row clearfix">
                          <div className="col-md-12">
                            <div className="table-responsive">
                              <table className="table table-hover">
                                <thead className="thead-dark">
                                  <tr>
                                    <th>#</th>
                                    <th>Item</th>
                                    <th className="hidden-sm-down">
                                      Description
                                    </th>
                                    <th>Quantity</th>
                                    <th className="hidden-sm-down">
                                      Unit Cost
                                    </th>
                                    <th>Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Simple Black Clock</td>
                                    <td className="hidden-sm-down">
                                      Lorem ipsum dolor sit amet.
                                    </td>
                                    <td>1</td>
                                    <td className="hidden-sm-down">$380</td>
                                    <td>$380</td>
                                  </tr>
                                  <tr>
                                    <td>2</td>
                                    <td>Brone Candle</td>
                                    <td className="hidden-sm-down">
                                      There are many variations of passages of
                                      Lorem Ipsum
                                    </td>
                                    <td>5</td>
                                    <td className="hidden-sm-down">$50</td>
                                    <td>$250</td>
                                  </tr>
                                  <tr>
                                    <td>3</td>
                                    <td>Wood Simple Clock</td>
                                    <td className="hidden-sm-down">
                                      Lorem ipsum dolor sit amet.
                                    </td>
                                    <td>2</td>
                                    <td className="hidden-sm-down">$500</td>
                                    <td>$1000</td>
                                  </tr>
                                  <tr>
                                    <td>4</td>
                                    <td>Unero Small Bag</td>
                                    <td className="hidden-sm-down">
                                      Contrary to popular belief, not simply
                                      random text
                                    </td>
                                    <td>3</td>
                                    <td className="hidden-sm-down">$300</td>
                                    <td>$900</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="row clearfix">
                          <div className="col-md-6">
                            <h5>Note</h5>
                            <p>
                              Etsy doostang zoodles disqus groupon greplin oooj
                              voxy zoodles, weebly ning heekya handango imeem
                              plugg dopplr jibjab, movity jajah plickers sifteo
                              edmodo ifttt zimbra.
                            </p>
                          </div>
                          <div className="col-md-6 text-right">
                            <p className="m-b-0">
                              <b>Sub-total:</b> 2930.00
                            </p>
                            <p className="m-b-0">Discout: 12.9%</p>
                            <p className="m-b-0">VAT: 12.9%</p>
                            <h3 className="m-b-0 m-t-10">USD 2930.00</h3>
                          </div>
                          <div className="hidden-print col-md-12 text-right">
                            <hr />
                            <button className="btn btn-outline-secondary mr-1">
                              <i className="icon-printer"></i>
                            </button>
                            <button className="btn btn-primary">Submit</button>
                          </div>
                        </div>
                      </div>
                      <div className={`tab-pane ${tab && "active"}`}>
                        <div className="row">
                          <div className="col-md-6 col-sm-6">
                            <address>
                              <strong>ThemeMakker Inc.</strong>
                              <br /> 795 Folsom Ave, Suite 546
                              <br /> San Francisco, CA 54656
                              <br />
                              <abbr title="Phone">P:</abbr> (123) 456-34636{" "}
                            </address>
                          </div>
                          <div className="col-md-6 col-sm-6 text-right">
                            <p className="m-b-0">
                              <strong>Order Date: </strong> Jun 15, 2018
                            </p>
                            <p className="m-b-0">
                              <strong>Order Status: </strong>
                              <span className="badge bg-orange">Pending</span>
                            </p>
                            <p>
                              <strong>Order ID: </strong> #123456
                            </p>
                          </div>
                        </div>
                        <div className="mt-40"></div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="table-responsive">
                              <table className="table table-striped">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>1</td>
                                    <td>Invoice Created</td>
                                    <td>18 Dec, 2017</td>
                                    <td>
                                      <span className="badge badge-default">
                                        Panding
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>1</td>
                                    <td>Invoice Sent</td>
                                    <td>19 Dec, 2017</td>
                                    <td>
                                      <span className="badge badge-default">
                                        Panding
                                      </span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>1</td>
                                    <td>Invoice Paid</td>
                                    <td>20 Dec, 2017</td>
                                    <td>
                                      <span className="badge badge-success">
                                        Success
                                      </span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default connect(mapStateToProps, {})(InvoicesV2);
