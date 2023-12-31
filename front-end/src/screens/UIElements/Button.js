import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UIButtonCard from "../../components/UIElements/UIButton";
import UIButtonGroupCard from "../../components/UIElements/UIButtonGroup";
import UIColorButton from "../../components/UIElements/UIColorButton";
import { onPressSimpleTab } from "../../actions";

class UIButtons extends React.Component {
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
              HeaderText="Buttons"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Buttons", navigate: "" },
              ]}
            />

            <UIButtonCard />
            <UIButtonGroupCard />
            <UIColorButton />
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
})(UIButtons);
