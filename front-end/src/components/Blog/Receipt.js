import React from "react";
import { connect } from "react-redux";
import images from "../../assets/images/user.png";

class Receipt extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="body">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12">
              <div className="receipt-left">
                <img className="img-fluid" src={images} />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 text-right">
              <h5>ThemeMakker.</h5>
              <p className="mb-0">
                +91 12345-6789 <i className="fa fa-phone"></i>
              </p>
              <p className="mb-0">
                info@gmail.com <i className="fa fa-envelope-o"></i>
              </p>
              <p>
                USA <i className="fa fa-location-arrow"></i>
              </p>
            </div>
          </div>
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12">
              <h5>
                Alizee Thomas <small>&nbsp; | &nbsp; Lucky Number : 123</small>
              </h5>
              <p className="mb-0">
                <b>Mobile :</b> +91 12345-6789
              </p>
              <p className="mb-0">
                <b>Email :</b> info@gmail.com
              </p>
              <p>
                <b>Address :</b> NewYork, USA
              </p>
            </div>
            <div className="col-lg-4 col-md-12 text-right">
              <h3>Receipt</h3>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Description</th>
                  <th className="text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-md-9">Payment for August 2016</td>
                  <td className="col-md-3 text-right">
                    <i className="fa fa-inr"></i> 15,000/-
                  </td>
                </tr>
                <tr>
                  <td className="col-md-9">Payment for June 2016</td>
                  <td className="col-md-3 text-right">
                    <i className="fa fa-inr"></i> 6,00/-
                  </td>
                </tr>
                <tr>
                  <td className="col-md-9">Payment for May 2016</td>
                  <td className="col-md-3 text-right">
                    <i className="fa fa-inr"></i> 35,00/-
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <p>Total Amount:</p>
                    <p>Late Fees:</p>
                    <p>Payable Amount:</p>
                    <p>Balance Due:</p>
                  </td>
                  <td className="text-right">
                    <p>
                      <strong>
                        <i className="fa fa-inr"></i> 65,500/-
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <i className="fa fa-inr"></i> 500/-
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <i className="fa fa-inr"></i> 1300/-
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <i className="fa fa-inr"></i> 9500/-
                      </strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="text-right">
                    <h6>Total:</h6>
                  </td>
                  <td className="text-danger text-right">
                    <h6>
                      <i className="fa fa-inr"></i> 31.566/-
                    </h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12">
              <p className="mb-0">
                <b>Date :</b> 15 May 2018
              </p>
              <h6 className="mb-0 text-muted">Thank you for your business!</h6>
            </div>
            <div className="col-lg-4 col-md-12">
              <h5>Signature</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(Receipt);
