import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UIColorsText from "../../components/UIElements/UIColorsText";
import UIColorsContextual from "../../components/UIElements/UIColorsContextual";
import UIColorsBackground from "../../components/UIElements/UIColorsBackground";
import UIColorsBackgroundGadient from "../../components/UIElements/UIColorsBackgroundGadient";
import { onPressSimpleTab } from "../../actions";

class UIColors extends React.Component {
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
              HeaderText="Colors"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Colors", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <UIColorsText />
              <UIColorsContextual />
            </div>
            <UIColorsBackground />
            <UIColorsBackgroundGadient />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({
  activeTabData: UIElementsReducer.activeTabData,
});

export default connect(mapStateToProps, {
  onPressSimpleTab,
})(UIColors);
