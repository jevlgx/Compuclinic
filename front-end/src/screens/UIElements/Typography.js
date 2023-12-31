import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UIHeaderCard from "../../components/UIElements/UIHeaderCard";
import UIparagraphCard from "../../components/UIElements/UIParagraphCard";
import UITextStyleCard from "../../components/UIElements/UITextStyleCard";
import UIOtherStyleCard from "../../components/UIElements/UIOtherStyleCard";
import { uiPraragraphData } from "../../Data/UIElementsData";

class UITypography extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Typography"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Typography", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <UIHeaderCard />
              <UIparagraphCard
                AlignData={uiPraragraphData.alignData}
                BlockquoteData={uiPraragraphData.BlockquoteData}
              />
              <UITextStyleCard />
              <UIOtherStyleCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
});

export default connect(mapStateToProps, {})(UITypography);
