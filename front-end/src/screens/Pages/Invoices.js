import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import img1 from "../../assets/images/sm/avatar1.jpg";
import img2 from "../../assets/images/sm/avatar2.jpg";

class Invoices extends React.Component {
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
              HeaderText="Invoices"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Invoices", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12">
                <div className="card invoice1">
                  <div className="body">
                    <div className="invoice-top clearfix">
                      <div className="logo">
                        <img
                          alt="user"
                          className="rounded-circle img-fluid"
                          src={img1}
                        />
                      </div>
                      <div className="info">
                        <h6>Michael Truong</h6>
                        <p>
                          {" "}
                          hello@michaeltruong.ca <br /> 289-335-6503{" "}
                        </p>
                      </div>
                      <div className="title">
                        <h4>Invoice #1069</h4>
                        <p>
                          Issued: May 27, 2018
                          <br /> Payment Due: June 27, 2018{" "}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="invoice-mid clearfix">
                      <div className="clientlogo">
                        <img
                          alt="user"
                          className="rounded-circle img-fluid"
                          src={img2}
                        />
                      </div>
                      <div className="info">
                        <h6>Client Name</h6>
                        <p>
                          JohnDoe@gmail.com
                          <br /> 555-555-5555
                        </p>
                        <h6>Project Description</h6>
                        <p>
                          Proin cursus, dui non tincidunt elementum, tortor ex
                          feugiat enim, at elementum enim quam vel purus.
                          Curabitur semper malesuada urna ut suscipit.
                        </p>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead className="thead-dark">
                          <tr>
                            <th>#</th>
                            <th>Description</th>
                            <th>Hours</th>
                            <th>Rate</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Communication</td>
                            <td>5</td>
                            <td>$20</td>
                            <td>$100</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Asset Gathering</td>
                            <td>2</td>
                            <td>$25</td>
                            <td>$50</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Design Development</td>
                            <td>15</td>
                            <td>$10</td>
                            <td>$150</td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Animation</td>
                            <td>8</td>
                            <td>$10</td>
                            <td>$80</td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Development</td>
                            <td>10</td>
                            <td>$18</td>
                            <td>$180</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <hr />
                    <div className="row clearfix">
                      <div className="col-md-6">
                        <h5>Note</h5>
                        <p>
                          Etsy doostang zoodles disqus groupon greplin oooj voxy
                          zoodles, weebly ning heekya handango imeem plugg
                          dopplr jibjab, movity jajah plickers sifteo edmodo
                          ifttt zimbra.
                        </p>
                      </div>
                      <div className="col-md-6 text-right">
                        <p className="m-b-0">
                          <b>Sub-total:</b> 560.00
                        </p>
                        <p className="m-b-0">Discout: 12.9%</p>
                        <p className="m-b-0">VAT: 12.9%</p>
                        <h3 className="m-b-0 m-t-10">USD 560.00</h3>
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

export default connect(mapStateToProps, {})(Invoices);
