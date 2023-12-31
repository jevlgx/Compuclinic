import React from "react";
import { connect } from "react-redux";

class BlogReplyCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>
            Leave a reply{" "}
            <small>
              Your email address will not be published. Required fields are
              marked*
            </small>
          </h2>
        </div>
        <div className="body">
          <div className="comment-form">
            <form className="row clearfix">
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <textarea
                    rows="4"
                    className="form-control no-resize"
                    placeholder="Please type what you want..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-block btn-primary">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BlogReplyCard);
