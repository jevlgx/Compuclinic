import React from "react";
import { connect } from "react-redux";
import {
  ButtonToolbar,
  OverlayTrigger,
  Popover,
  Button,
} from "react-bootstrap";
import { onPressCloseAlert } from "../../actions";

class UIBootstrapPopover extends React.Component {
  render() {
    return (
      <div className="col-lg-12">
        <div className="card">
          <div className="header">
            <h2>Popover</h2>
          </div>
          <div className="body">
            <ButtonToolbar>
              <OverlayTrigger
                trigger="click"
                key="rightksjkl"
                placement="right"
                overlay={
                  <Popover id={`popover-positioned- right`}>
                    <Popover.Title as="h3">{`Popover 'Click'`}</Popover.Title>
                    <Popover.Content>
                      <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button className="mr-1" variant="default">
                  Popover on Click
                </Button>
              </OverlayTrigger>

              <OverlayTrigger
                trigger="hover"
                key="right"
                placement="right"
                overlay={
                  <Popover id={`popover-positioned- right`}>
                    <Popover.Title as="h3">{`Popover 'Hover'`}</Popover.Title>
                    <Popover.Content>
                      <strong>Holy guacamole!</strong> Check this info.
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button className="mr-1" variant="default">
                  Popover on Hover
                </Button>
              </OverlayTrigger>

              {["top", "right", "bottom", "left"].map((placement) => (
                <OverlayTrigger
                  trigger="hover"
                  key={placement}
                  placement={placement}
                  overlay={
                    <Popover id={`popover-positioned-${placement}`}>
                      <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
                      <Popover.Content>
                        <strong>Holy guacamole!</strong> Check this info.
                      </Popover.Content>
                    </Popover>
                  }
                >
                  <Button className="mr-1" variant="default">
                    Popover on {placement}
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
})(UIBootstrapPopover);
