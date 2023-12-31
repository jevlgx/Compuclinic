import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UIBootstrapSimpleLineIcons from "../../components/UIElements/UIBootstrapSimpleLineIcons";
import UIIconsFontAwesomeIcon from "../../components/UIElements/UIIconsFontAwesomeIcon";
import UIIconsWeatherIcons from "../../components/UIElements/UIIconsWeatherIcons";
import { onPressSimpleTab } from "../../actions";

class UIIcons extends React.Component {
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
              HeaderText="Icons"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Icons", navigate: "" },
              ]}
            />
            <div className="row clealfix">
              <div className="col-md-12">
                <UIBootstrapSimpleLineIcons />
                <UIIconsFontAwesomeIcon />
                <UIIconsWeatherIcons />
              </div>
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
})(UIIcons);
