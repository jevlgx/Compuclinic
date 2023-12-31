import React from "react";
import { connect } from "react-redux";
import {
  ButtonToolbar,
  OverlayTrigger,
  Tooltip,
  Button,
} from "react-bootstrap";
import { onPressCloseAlert } from "../../actions";

class UIBootstrapTooltips extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>Tooltips</h2>
          </div>
          <div className="body">
            <ButtonToolbar className="btn btn-default mr-1">
              {["top", "right", "bottom", "left"].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      Tooltip on <strong>{placement}</strong>.
                    </Tooltip>
                  }
                >
                  <Button className="mr-1" variant="default">
                    Tooltip on {placement}
                  </Button>
                </OverlayTrigger>
              ))}
            </ButtonToolbar>
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
})(UIBootstrapTooltips);
