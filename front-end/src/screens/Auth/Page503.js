import React from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/images/logo-white.svg";

class Page503 extends React.Component {
  render() {
    return (
      <div className="theme-cyan">
        <div >
          <div className="vertical-align-wrap">
            <div className="vertical-align-middle auth-main">
              <div className="auth-box">
                <div className="top">
                  <img src={Logo} alt="Lucid" style={{ height: "40px", margin: "10px" }} />
                </div>
                <div className="card">
                  <div className="header">
                    <h3 >
                      <span className="clearfix title">
                        <span className="number left">Error 5<i className="fa fa-smile-o"></i>3</span>
                        <span className="text"><br />Please try after some time</span>
                      </span>
                    </h3>
                  </div>
                  <div className="body">
                    <p>This site is getting up in few minutes.</p>
                    <div className="margin-top-30">
                      <a className="btn btn-primary" href="dashboard"><i className="fa fa-home"></i>&nbsp;<span >Home</span></a>
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

Page503.propTypes = {
};

const mapStateToProps = ({ loginReducer }) => ({
});

export default connect(mapStateToProps, {
})(Page503);
