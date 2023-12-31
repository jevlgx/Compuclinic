import React from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/images/logo.png";
import LogoWhite from "../../assets/images/logo-white.svg";

class ForgotPassword extends React.Component {
  render() {
    return (
      <div className="theme-blue">
        <div >
          <div className="vertical-align-wrap">
            <div className="vertical-align-middle auth-main">
              <div className="auth-box">
                <div className="img-responsive logo">
                <img
                  src={
                    document.body.classList.contains("full-dark")
                      ? LogoWhite
                      : Logo
                  }
                  width="200" height="150"
                  alt="Compuclinic"
                  className="img-responsive logo"
                />
    
                </div>
                <div className="card">
                  <div className="header">
                    <p className="lead">Recover my password</p>
                  </div>
                  <div className="body">
                    <p>Please enter your email address below to receive instructions for resetting password.</p>
                    <form className="form-auth-small ng-untouched ng-pristine ng-valid">
                      <div className="form-group">
                        <input className="form-control" placeholder="Password" type="password" />
                      </div>
                      <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={() => { this.props.history.push("login") }}>
                        RESET PASSWORD
                        </button>
                      <div className="bottom">
                        <span className="helper-text">Know your password? <a href="login">Login</a></span>
                      </div>
                    </form>
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

ForgotPassword.propTypes = {
};

const mapStateToProps = ({ loginReducer }) => ({
});

export default connect(mapStateToProps, {
})(ForgotPassword);
