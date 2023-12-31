import React from "react";
import { connect } from "react-redux";

class FileStorageCard extends React.Component {
  render() {
    const { TotalSize, UsedSize } = this.props;
    return (
      <div className="card">
        <div className="body">
          <h4>
            {TotalSize} <i className="fa fa-server float-right"></i>
          </h4>
          <p className="mb-0">
            Storage{" "}
            <small className="text-muted float-right">of {TotalSize}</small>
          </p>
          <div
            id="progress-striped progress-xs"
            className="progress progress-striped mb-0"
          >
            <div
              className="progress-bar progress-bar-warning"
              data-transitiongoal={`${UsedSize}`}
              aria-valuenow={`${UsedSize}`}
              style={{ width: `${UsedSize}%` }}
            >
              {UsedSize}%
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FileStorageCard.propTypes = {};

const mapStateToProps = ({ mailInboxReducer }) => ({
  isTagDropDown: mailInboxReducer.isTagDropDown,
});

export default connect(mapStateToProps, {})(FileStorageCard);
