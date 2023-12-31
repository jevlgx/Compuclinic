import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UIBootstrapAlertMessage from "../../components/UIElements/UIBoostrapAlertMessage";
import UIBootstrapAlertMessageWithLink from "../../components/UIElements/UIBootstrapAlertMessageWithLink";
import UIBootstrapAlertMessageWithIcon from "../../components/UIElements/UIBootstrapAlertMessageWithIcon";
import UIBootstrapLabels from "../../components/UIElements/UIBootstrapLabels";
import UIBootstrapAccordion from "../../components/UIElements/UIBootstrapAccordion";
import UIBootstrapPagognation from "../../components/UIElements/UIBootstrapPagignation";
import UIBootstrapTooltips from "../../components/UIElements/UIBootstrapTooltips";
import UIBootstrapPopover from "../../components/UIElements/UIBootstrapPopover";
import UIBootstrapPosition from "../../components/UIElements/UIBoostrapPosition";
import UIBootstrapBorders from "../../components/UIElements/UIBootstrapBorders";
import UIBootstrapShadows from "../../components/UIElements/UIBootstrapShadows";

class BootstrapUI extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { activeTabData, isTabExpend, wind } = this.props;
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
              HeaderText="Bootstrap UI"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Bootstrap UI", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <UIBootstrapAlertMessage />
              <UIBootstrapAlertMessageWithLink />
              <UIBootstrapAlertMessageWithIcon />
            </div>
            <div className="row clearfix">
              <UIBootstrapLabels />
            </div>
            <div className="row clearfix">
              <UIBootstrapAccordion />
            </div>
            <div className="row clearfix">
              <UIBootstrapPagognation />
              <UIBootstrapTooltips />
              <UIBootstrapPopover />
            </div>
            <UIBootstrapPosition />
            <UIBootstrapBorders />
            <UIBootstrapShadows />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({
  activeTabData: UIElementsReducer.activeTabData,
  isTabExpend: UIElementsReducer.isTabExpend,
  wind: UIElementsReducer.wind,
});

export default connect(mapStateToProps, {})(BootstrapUI);
