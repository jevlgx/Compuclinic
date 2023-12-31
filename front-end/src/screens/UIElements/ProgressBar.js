import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UIDefaultProgressBar from "../../components/UIElements/UIDefaultProgressBar";
import UIOtherProgressBar from "../../components/UIElements/UIOtherProgressBar";

class UIProgressBar extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { modalData, modalCard } = this.props;
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
              HeaderText="Progress Bar"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Progress Bar", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <UIDefaultProgressBar />
              <UIOtherProgressBar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(UIProgressBar);
