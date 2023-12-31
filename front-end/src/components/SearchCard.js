import React from "react";
import { connect } from "react-redux";

class SearchCard extends React.Component {
  render() {
    const { ImageUrl, HeaderText, Details } = this.props;

    return (
      <div className="card">
        <div className="body search">
          <div className="input-group m-b-0">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="icon-magnifier"></i>
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(SearchCard);
