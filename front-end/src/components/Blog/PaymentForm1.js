import React from "react";
import { connect } from "react-redux";
import mastercard from "../../assets/images/ecommerce/mastercard.png";
import visacard from "../../assets/images/ecommerce/visa-card.png";
import paypal from "../../assets/images/ecommerce/paypal.png";

class PaymentForm1 extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="header">
            <h2>{name}</h2>
          </div>
          <div className="body">
            {name === "Payment form1" ? (
              <p>
                <img className="m-r-5" src={mastercard} />
                <img className="m-r-5" src={visacard} />
                <img src={paypal} />
              </p>
            ) : (
              <ul
                role="tablist"
                className="nav nav-pills justify-content-start mb-2"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    role="tab"
                    id="ngb-tab-0"
                    aria-controls="ngb-tab-0-panel"
                    aria-expanded="true"
                    aria-disabled="false"
                  >
                    <i className="fa fa-credit-card"></i> Credit Card
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    role="tab"
                    id="ngb-tab-1"
                    aria-expanded="false"
                    aria-disabled="false"
                  >
                    <i className="fa fa-paypal"></i> Paypal
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    role="tab"
                    id="ngb-tab-2"
                    aria-expanded="false"
                    aria-disabled="false"
                  >
                    <i className="fa fa-university"></i> Bank Transfer
                  </a>
                </li>
              </ul>
            )}
            <p className="alert alert-success">Some text success or error</p>
            <form role="form">
              <div className="form-group">
                <label>Full name (on the card)</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    name="username"
                    placeholder=""
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Card number</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-credit-card"></i>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    name="cardNumber"
                    placeholder=""
                    type="text"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <div className="form-group">
                    <label>
                      <span className="hidden-xs">Expiration</span>
                    </label>
                    {name === "Payment form1" ? (
                      <div className="form-inline justify-content-between">
                        <select
                          className="form-control"
                          style={{ width: "45%" }}
                        >
                          <option>MM</option>
                          <option>01 - January</option>
                          <option>02 - February</option>
                          <option>03 - February</option>
                        </select>
                        <span> / </span>
                        <select
                          className="form-control"
                          style={{ width: "45%" }}
                        >
                          <option>YY</option>
                          <option>2018</option>
                          <option>2019</option>
                        </select>
                      </div>
                    ) : (
                      <div className="input-group">
                        <input
                          className="form-control"
                          name=""
                          placeholder="MM"
                          type="number"
                        />
                        <input
                          className="form-control"
                          name=""
                          placeholder="YY"
                          type="number"
                        />
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="form-group">
                    <label ngbtooltip="3 digits code on back side of the card">
                      CVV <i className="fa fa-question-circle"></i>
                    </label>
                    <input className="form-control" required="" type="text" />
                  </div>
                </div>
              </div>
              <button
                className="subscribe btn btn-primary btn-block"
                type="button"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(PaymentForm1);
