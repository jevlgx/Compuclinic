import React from "react";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";
import { onPressCloseAlert } from "../../actions";

class UIBootstrapAlertMessageWithIcon extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>Alert Messages With Icon</h2>
          </div>
          <div className="body">
            {this.props.alertData.map((data, ind) => {
              return (
                <Alert
                  key={ind}
                  variant={data.variant}
                  show={data.show}
                  onClose={() => {
                    this.props.onPressCloseAlert(ind);
                  }}
                  dismissible
                >
                  <i className={data.iconClass}></i> {data.message}
                </Alert>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({
  alertData: UIElementsReducer.alertData,
});

export default connect(mapStateToProps, {
  onPressCloseAlert,
})(UIBootstrapAlertMessageWithIcon);
