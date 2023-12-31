import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UISimpleTabCard from "../../components/UIElements/UISimpleTabCard";
import UIDropdownTabCard from "../../components/UIElements/UIDropdownTabCard";
import { uiTabsData, dropdownTabCardData } from "../../Data/UIElementsData";
import { onPressSimpleTab } from "../../actions";
import UIBootstrapSimpleExampleTab from "../../components/UIElements/UIBootstrapSimpleExampleTab";
import UIBootstrapSimpleExampleTab2 from "../../components/UIElements/UIBootstrapSimpleExampleTab2";
import UIBootstrapSimpleExampleTab3 from "../../components/UIElements/UIBootstrapSimpleExampleTab3";
import UIBootstrapSimpleExampleTab4 from "../../components/UIElements/UIBootstrapSimpleExampleTab4";

class UITabs extends React.Component {
  componentDidMount() {
    this.props.onPressSimpleTab(0, 0);
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
              HeaderText="Tabs"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Tabs", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <UIBootstrapSimpleExampleTab />
              <UIBootstrapSimpleExampleTab2 />
              <UIBootstrapSimpleExampleTab3 />
              <UIBootstrapSimpleExampleTab4 />
              {uiTabsData.map((data, ind) => {
                if (ind > 3) {
                  return (
                    <UISimpleTabCard
                      key={ind + "OSJDo"}
                      keys={ind}
                      ContainerClass={data.ContainerClass}
                      HeaderText={data.HeaderText}
                      HeaderDetails={data.HeaderDetails}
                      NavTabClass={data.NavTabClass}
                      TabData={data.TabData}
                      Wind={wind !== null ? wind : ind}
                      ActiveTab={activeTabData}
                      activeIndex={isTabExpend}
                      onPressTab={(index) => {
                        this.props.onPressSimpleTab(index, ind);
                      }}
                    />
                  );
                }
              })}
              {dropdownTabCardData.map((data, i) => {
                return (
                  <UIDropdownTabCard
                    key={"udrhguohourgho" + `${i}`}
                    HeaderText={data.HeaderText}
                    NavTabClass={data.NavTabClass}
                    TabData={data.TabData}
                  />
                );
              })}
            </div>
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

export default connect(mapStateToProps, {
  onPressSimpleTab,
})(UITabs);
