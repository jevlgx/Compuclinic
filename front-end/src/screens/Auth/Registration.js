import React from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/images/logo.png";
import LogoWhite from "../../assets/images/logo-white.svg";


class Registration extends React.Component {
  componentDidMount(){
    document.body.classList.remove("theme-cyan");
    document.body.classList.remove("theme-purple");
    document.body.classList.remove("theme-blue");
    document.body.classList.remove("theme-green");
    document.body.classList.remove("theme-orange");
    document.body.classList.remove("theme-blush");
  }
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
                    <p className="lead">Create an account</p>
                  </div>
                  <div className="body">
                    <form
                      className="form-auth-small ng-untouched ng-pristine ng-valid"
                      
                    >
                      <div className="form-group">
                        <label className="control-label sr-only" >
                          Email
                            </label>
                        <input
                          className="form-control"
                          id="signup-email"
                          placeholder="Your email"
                          type="email"
                        />
                      </div>
                      <div className="form-group">
                        <label className="control-label sr-only" >
                          Password
                            </label>
                        <input
                          className="form-control"
                          id="signup-password"
                          placeholder="Password"
                          type="password"
                        />
                      </div>
                      <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={() => { this.props.history.push("login") }}>
                        REGISTER
                        </button>
                      <div className="bottom">
                        <span className="helper-text">
                          Already have an account?{" "}
                          <a href="login">Login</a>
                        </span>
                      </div>
                    </form>
                    {/* <div className="separator-linethrough">
                      <span>OR</span>
                    </div> */}
                    {/* <button className="btn btn-signin-social">
                      <i className="fa fa-facebook-official facebook-color"></i> Sign in with
                        Facebook
                        </button>
                    <button className="btn btn-signin-social">
                      <i className="fa fa-twitter twitter-color"></i> Sign in with Twitter
                        </button> */}
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

Registration.propTypes = {
};

const mapStateToProps = ({ loginReducer }) => ({
  email: loginReducer.email,
  password: loginReducer.password
});

export default connect(mapStateToProps, {
})(Registration);
