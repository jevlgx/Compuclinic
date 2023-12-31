import React from "react";
import { connect } from "react-redux";

class BlogNewPostCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>New Post</h2>
        </div>
        <div className="body">
          <div className="new_post">
            <div className="form-group">
              <textarea
                className="form-control no-resize"
                placeholder="Please type what you want..."
                rows="4"
              ></textarea>
            </div>
            <div className="post-toolbar-b">
              <button className="btn btn-warning mr-1">
                <i className="icon-paper-clip text-light"></i>
              </button>
              <button className="btn btn-warning mr-1">
                <i className="icon-camera text-light"></i>
              </button>
              <button className="btn btn-primary">Post</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BlogNewPostCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(BlogNewPostCard);
