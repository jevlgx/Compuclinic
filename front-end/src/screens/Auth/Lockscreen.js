import React from "react";
import { connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/images/logo-white.svg";
import image from "../../assets/images/user-small.png";

class Lockscreen extends React.Component {
  render() {
    return (
      <div className="theme-blue">
        <div >
          <div className="vertical-align-wrap">
            <div className="vertical-align-middle auth-main">
              <div className="auth-box">
                <div className="">
                  <img src={Logo} alt="Compuclinic" style={{ height: "150", margin: "200" }} />
                </div>
                <div className="card">
                  <div className="body">
                    <div className="user text-center m-b-30">
                      <img
                        alt="Avatar"
                        className="rounded-circle"
                        src={image}
                      />
                      <h4 className="name m-t-10">Alizee Thomas</h4>
                      <p>info@example.com</p>
                    </div>
                    <form  className="ng-untouched ng-pristine ng-valid">
                      <div className="form-group">
                        <input
                          className="form-control"
                          placeholder="Enter your password ..."
                          type="password"
                        />
                      </div>
                      {/* <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={() => { window.location.pathname="/templates/lucid/react/dashboard" }}>
                        Login
                        </button> */}
                        <a href="dashboard" className="btn btn-primary btn-lg btn-block">
                          Login
                        </a>
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

Lockscreen.propTypes = {
};

const mapStateToProps = ({ loginReducer }) => ({
});

export default connect(mapStateToProps, {
})(Lockscreen);
