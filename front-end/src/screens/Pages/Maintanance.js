import React from "react";
import { connect } from "react-redux";

class Maintanance extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <div className="vertical-align-wrap">
          <div className="vertical-align-middle maintenance">
            <div className="text-center">
              <article>
                <h1>We’ll be back soon!</h1>
                <div>
                  <p>
                    Sorry for the inconvenience
                    <br /> but we’re performing some maintenance at the moment.
                    <br /> If you need to you can always
                    <a href="mailto:#">contact us</a>, otherwise we’ll be back
                    online shortly!
                  </p>
                  <p>— The Team</p>
                </div>
              </article>
              <div className="margin-top-30">
                <a
                  className="btn btn-default"
                  onClick={() => {
                    this.props.history.push("projectslist");
                  }}
                >
                  <i className="fa fa-arrow-left"></i>&nbsp;<span>Go Back</span>
                </a>
                &nbsp;
                <a className="btn btn-info" href="dashboard">
                  <i className="fa fa-home"></i>&nbsp;<span>Home</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(Maintanance);
