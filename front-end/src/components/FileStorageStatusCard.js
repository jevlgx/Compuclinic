import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { ProgressBar } from "react-bootstrap";

class FileStorageStatusCard extends React.Component {
  render() {
    const { TotalSize, UsedSize, Type, UsedPer, ProgressBarClass } = this.props;
    return (
      <div className="card modal-open m-b-5">
        <div className="body">
          <h6>{UsedSize}</h6>
          <p className="mb-0">
            {Type}{" "}
            <small className="text-muted float-right">of {TotalSize}</small>
          </p>
        </div>
        <div className={ProgressBarClass}>
          <ProgressBar now={parseInt(UsedPer)} min={0} max={100} />
        </div>
      </div>
    );
  }
}

FileStorageStatusCard.propTypes = {
  TotalSize: PropTypes.string.isRequired,
  UsedSize: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  UsedPer: PropTypes.number.isRequired,
  ProgressBarClass: PropTypes.string.isRequired,
};

const mapStateToProps = ({ mailInboxReducer, analyticalReducer }) => ({
  isTagDropDown: mailInboxReducer.isTagDropDown,
  facebookShowProgressBar: analyticalReducer.facebookShowProgressBar,
});

export default connect(mapStateToProps, {})(FileStorageStatusCard);
