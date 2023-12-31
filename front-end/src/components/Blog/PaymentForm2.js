import React from "react";
import { connect } from "react-redux";

class PaymentForm2 extends React.Component {
  tabchange = (id) => {
    var tab1 = document.getElementById("tab-1");
    if (tab1.classList.contains("active")) {
      tab1.classList.remove("active");
    }

    var tab2 = document.getElementById("tab-2");
    if (tab2.classList.contains("active")) {
      tab2.classList.remove("active");
    }
    var tab3 = document.getElementById("tab-3");
    if (tab3.classList.contains("active")) {
      tab3.classList.remove("active");
    }
    var activetab = document.getElementById("tab-" + id);
    activetab.classList.add("active");

    var tabpane1 = document.getElementById("tab-pane1");
    if (tabpane1.classList.contains("active")) {
      tabpane1.classList.remove("active");
    }
    var tabpane2 = document.getElementById("tab-pane2");
    if (tabpane2.classList.contains("active")) {
      tabpane2.classList.remove("active");
    }
    var tabpane3 = document.getElementById("tab-pane3");
    if (tabpane3.classList.contains("active")) {
      tabpane3.classList.remove("active");
    }
    var activetabpane = document.getElementById("tab-pane" + id);
    activetabpane.classList.add("active");
  };
  render() {
    const { name } = this.props;
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Payment form2</h2>
          </div>
          <div className="body">
            <ul
              role="tablist"
              className="nav nav-pills justify-content-start mb-2"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  href="#!"
                  role="tab"
                  id="tab-1"
                  onClick={(e) => {
                    e.preventDefault();
                    this.tabchange(1);
                  }}
                >
                  <i className="fa fa-credit-card"></i> Credit Card
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link "
                  href="#!"
                  role="tab"
                  id="tab-2"
                  onClick={(e) => {
                    e.preventDefault();
                    this.tabchange(2);
                  }}
                >
                  <i className="fa fa-paypal"></i> Paypal
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#!"
                  role="tab"
                  id="tab-3"
                  onClick={(e) => {
                    e.preventDefault();
                    this.tabchange(3);
                  }}
                >
                  <i className="fa fa-university"></i> Bank Transfer
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-pane1" className="active tab-pane">
                <p className="alert alert-success">
                  Some text success or error
                </p>
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
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="form-group">
                        <label ngbtooltip="3 digits code on back side of the card">
                          CVV <i className="fa fa-question-circle"></i>
                        </label>
                        <input
                          className="form-control"
                          required=""
                          type="text"
                        />
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
              <div id="tab-pane2" className="tab-pane">
                <p>Paypal is easiest way to pay online</p>
                <p>
                  <button type="button" className="btn btn-primary">
                    <i className="fa fa-paypal"></i> Log in my Paypal
                  </button>
                </p>
                <p>
                  <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.{" "}
                </p>
              </div>
              <div id="tab-pane3" className="tab-pane">
                <p>Bank accaunt details</p>
                <dl className="param">
                  <dt>BANK: </dt>
                  <dd> THE WORLD BANK</dd>
                </dl>
                <dl className="param">
                  <dt>Accaunt number: </dt>
                  <dd> 12345678912345</dd>
                </dl>
                <dl className="param">
                  <dt>IBAN: </dt>
                  <dd> 123456789</dd>
                </dl>
                <p>
                  <strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(PaymentForm2);
