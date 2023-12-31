import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UINotificationMessage from "../../components/UIElements/UINotificationMessage";
import UINotificationPopup from "../../components/UIElements/UINotificationPopup";
import { onPressSimpleTab, notifyOnClose } from "../../actions";
import { Toast } from "react-bootstrap";

class UINotifications extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { notifyData } = this.props;

    return (
      <div
        style={{ flex: 1 }}
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Notifications"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Notifications", navigate: "" },
              ]}
            />
            <UINotificationMessage />
            <UINotificationPopup />
          </div>
        </div>

        <Toast
          id="toast-container"
          show={true}
          className={`toast-bottom-right toast-container`}
          style={{ background: "transparent" }}
          onClose={() => {}}
        >
          {notifyData.map((data, i) => {
            if (data.position === "bottom-right") {
              setTimeout(() => {
                this.props.notifyOnClose(i);
              }, 10000);
              return (
                <Toast.Body
                  key={"keys" + i}
                  className={`toast-${data.type} mb-10 ml-0`}
                  style={{ opacity: 1 }}
                >
                  <strong className="mr-auto"> {data.dialogText} </strong>
                  <button
                    className="toast-close-button"
                    onClick={() => {
                      this.props.notifyOnClose(i);
                    }}
                  >
                    x
                  </button>
                </Toast.Body>
              );
            }
          })}
        </Toast>
        <Toast
          id="toast-container"
          show={true}
          className={`toast-top-right toast-container`}
          style={{ background: "transparent" }}
          onClose={() => {}}
        >
          {notifyData.map((data, i) => {
            if (data.position === "top-right") {
              setTimeout(() => {
                this.props.notifyOnClose(i);
              }, 10000);
              return (
                <Toast.Body
                  key={"keys" + i}
                  className={`toast-${data.type} mb-10 ml-0`}
                  style={{ opacity: 1 }}
                >
                  <strong className="mr-auto"> {data.dialogText} </strong>
                  <button
                    className="toast-close-button"
                    onClick={() => {
                      this.props.notifyOnClose(i);
                    }}
                  >
                    x
                  </button>
                </Toast.Body>
              );
            }
          })}
        </Toast>
        <Toast
          id="toast-container"
          show={true}
          className={`toast-bottom-left toast-container`}
          style={{ background: "transparent" }}
          onClose={() => {}}
        >
          {notifyData.map((data, i) => {
            if (data.position === "bottom-left") {
              setTimeout(() => {
                this.props.notifyOnClose(i);
              }, 10000);
              return (
                <Toast.Body
                  key={"keys" + i}
                  className={`toast-${data.type} mb-10 ml-0`}
                  style={{ opacity: 1 }}
                >
                  <strong className="mr-auto"> {data.dialogText} </strong>
                  <button
                    className="toast-close-button"
                    onClick={() => {
                      this.props.notifyOnClose(i);
                    }}
                  >
                    x
                  </button>
                </Toast.Body>
              );
            }
          })}
        </Toast>
        <Toast
          id="toast-container"
          show={true}
          className={`toast-top-left toast-container`}
          style={{ background: "transparent" }}
          onClose={() => {}}
        >
          {notifyData.map((data, i) => {
            if (data.position === "top-left") {
              setTimeout(() => {
                this.props.notifyOnClose(i);
              }, 10000);
              return (
                <Toast.Body
                  key={"keys" + i}
                  className={`toast-${data.type} mb-10 ml-0`}
                  style={{ opacity: 1 }}
                >
                  <strong className="mr-auto"> {data.dialogText} </strong>
                  <button
                    className="toast-close-button"
                    onClick={() => {
                      this.props.notifyOnClose(i);
                    }}
                  >
                    x
                  </button>
                </Toast.Body>
              );
            }
          })}
        </Toast>
        <Toast
          id="toast-container"
          show={true}
          className={`toast-bottom-full-width toast-container`}
          style={{
            background: "transparent",
            width: "calc(100% - 10px)",
            bottom: 0,
            right: 10,
            maxWidth: "100%",
          }}
          onClose={() => {}}
        >
          {notifyData.map((data, i) => {
            if (data.position === "bottom-full-width") {
              setTimeout(() => {
                this.props.notifyOnClose(i);
              }, 10000);
              return (
                <Toast.Body
                  key={"keys" + i}
                  className={`toast-${data.type} mb-10 ml-0`}
                  style={{ opacity: 1, width: "100%" }}
                >
                  <strong className="mr-auto"> {data.dialogText} </strong>
                  <button
                    className="toast-close-button"
                    onClick={() => {
                      this.props.notifyOnClose(i);
                    }}
                  >
                    x
                  </button>
                </Toast.Body>
              );
            }
          })}
        </Toast>
        <Toast
          id="toast-container"
          show={true}
          className={`toast-top-full-width toast-container`}
          style={{
            background: "transparent",
            width: "calc(100% - 10px)",
            top: 0,
            right: 10,
            maxWidth: "100%",
          }}
          onClose={() => {}}
        >
          {notifyData.map((data, i) => {
            if (data.position === "top-full-width") {
              setTimeout(() => {
                this.props.notifyOnClose(i);
              }, 10000);
              return (
                <Toast.Body
                  key={"keys" + i}
                  className={`toast-${data.type} mb-10 ml-0`}
                  style={{ opacity: 1, width: "100% " }}
                >
                  <strong className="mr-auto"> {data.dialogText} </strong>
                  <button
                    className="toast-close-button"
                    onClick={() => {
                      this.props.notifyOnClose(i);
                    }}
                  >
                    x
                  </button>
                </Toast.Body>
              );
            }
          })}
        </Toast>
        <Toast
          id="toast-container"
          show={true}
          className={`toast-top-center toast-container`}
          style={{ background: "transparent", overflow: "inherit" }}
          onClose={() => {}}
        >
          {notifyData.map((data, i) => {
            if (data.position === "top-center") {
              setTimeout(() => {
                this.props.notifyOnClose(i);
              }, 10000);
              return (
                <Toast.Body
                  key={"keys" + i}
                  className={`toast-${data.type} mb-10 ml-0`}
                  style={{ opacity: 1 }}
                >
                  <strong className="mr-auto"> {data.dialogText} </strong>
                  <button
                    className="toast-close-button"
                    onClick={() => {
                      this.props.notifyOnClose(i);
                    }}
                  >
                    x
                  </button>
                </Toast.Body>
              );
            }
          })}
        </Toast>
        <Toast
          id="toast-container"
          show={true}
          className={`toast-bottom-center toast-container`}
          style={{ background: "transparent", overflow: "inherit" }}
          onClose={() => {}}
        >
          {notifyData.map((data, i) => {
            if (data.position === "bottom-center") {
              setTimeout(() => {
                this.props.notifyOnClose(i);
              }, 10000);
              return (
                <Toast.Body
                  key={"keys" + i}
                  className={`toast-${data.type} mb-10 ml-0`}
                  style={{ opacity: 1 }}
                >
                  <strong className="mr-auto"> {data.dialogText} </strong>
                  <button
                    className="toast-close-button"
                    onClick={() => {
                      this.props.notifyOnClose(i);
                    }}
                  >
                    x
                  </button>
                </Toast.Body>
              );
            }
          })}
        </Toast>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({
  notifyData: UIElementsReducer.notifyData,
});

export default connect(mapStateToProps, {
  onPressSimpleTab,
  notifyOnClose,
})(UINotifications);
