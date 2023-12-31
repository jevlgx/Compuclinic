import React from "react";
import { connect } from "react-redux";
import { onPresAddEvent } from "../actions";

class BlogPostCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="body">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Blog title"
            />
          </div>
          <select className="form-control show-tick">
            <option>Select Category</option>
            <option>Web Design</option>
            <option>Photography</option>
            <option>Technology</option>
            <option>Lifestyle</option>
            <option>Sports</option>
          </select>
          <div className="form-group m-t-20 m-b-20">
            <input
              type="file"
              className="form-control-file"
              id="exampleInputFile"
              aria-describedby="fileHelp"
            />
            <small id="fileHelp" className="form-text text-muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </small>
          </div>
          {/* <CKEditor  type="classic" editorName="1hioui64" data="  Hi,<br /><p>we are Wrraptheme. </p>" /> */}
          <button type="button" className="btn btn-block btn-primary   m-t-20">
            Post
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, { onPresAddEvent })(BlogPostCard);
