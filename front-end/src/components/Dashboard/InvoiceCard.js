import React from "react";
import { connect } from "react-redux";

class InvoiceCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Invoice</h2>
        </div>
        <div className="body">
          <div className="row">
            <div className="col-md-12">
              <address>
                <strong>ThemeMakker Inc.</strong>
                <small className="float-right">16/05/2018</small>
                <br /> 795 Folsom Ave, Suite 546
                <br /> San Francisco, CA 54656
                <br />
                <abbr title="Phone">P:</abbr> (123) 456-34636
              </address>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Item</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>$55</strong>
                  </td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Simple Black Clock</td>
                  <td>$30</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Brone Candle</td>
                  <td>$25</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-md-12 align-right">
              <button className="btn btn-warning mr-1">
                <i className="icon-printer"></i>
              </button>
              <button className="btn btn-primary">Pay Now</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

InvoiceCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(InvoiceCard);
