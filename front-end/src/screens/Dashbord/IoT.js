import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import SparkleCard from "../../components/SparkleCard";
import SecurityMainCard from "../../components/SecurityMainCard";
import InstumateStatusCard from "../../components/InstumateStatusCard";
import SwitchBordCard from "../../components/SwitchBordCard";

import AcIcon from "../../assets/images/air-conditioner.png";
import AcIconGray from "../../assets/images/air-conditioner-grey.png";
import FridgeIcon from "../../assets/images/fridge.png";
import FridgeIconGray from "../../assets/images/fridge-grey.png";
import WMIcon from "../../assets/images/washing-machine.png";
import WMIconGray from "../../assets/images/washing-machine-grey.png";

import {
  sparkleCardData,
  buttonsIndoor,
  buttonsOutdoor,
  buttonsAppliences
} from "../../Data/IoTData";
import {
  onPressSecuritySystem,
  onPressMainGate,
  onPressSwitchBordButton,
  onPressOutSwitchBordButton,
  onPressAppliencesSwitchBordButton,
  onPressSwitchBordDropDown,
  onPressOutdoorDropDown,
  onPressSwithOnAllOut,
  onPressAllOffLightOut,
  onPressSwithOnAllIn,
  onPressAllOffLightIn
} from "../../actions";

class IoT extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      isSecuritySystem,
      isMaingate,
      switchBoardSwitch,
      switchOutBoardSwitch,
      switchAppliencesBoardSwitch,
      isIndoorDropdown,
      isOutdoorDropdown
    } = this.props;
    return (
      <div
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div >
          <div className="container-fluid">
            <PageHeader HeaderText="IoT Dashboard" Breadcrumb={[{ name: "Dashboard", navigate: "" }, { name: "IoT Dashboard", navigate: "" }]} />
            <div className="row clearfix">
              {sparkleCardData.map((data, i) => {
                return (
                  <SparkleCard
                    index={i}
                    key={data.heading + data.money}
                    Heading={data.heading}
                    Money={data.money}
                    PerText={data.perText}
                    mainData={data.sparklineData.data}
                    chartColor={data.sparklineData.areaStyle.color}
                    ContainerClass="col-lg-4 col-md-4 col-md-12"
                  />
                );
              })}
            </div>
            <div className="row clearfix">
              <SecurityMainCard
                Heading="Security System"
                SuccessText="Triggered"
                DangerText="Loose"
                DangerButtonText="Loose"
                SuccessButtonText="Trigger"
                OnClick={() => {
                  this.props.onPressSecuritySystem();
                }}
                Toggle={isSecuritySystem}
              />
              <SecurityMainCard
                Heading="Main Gate"
                SuccessText="Closed"
                DangerText="Opened"
                DangerButtonText="Open"
                SuccessButtonText="Close"
                OnClick={() => {
                  this.props.onPressMainGate();
                }}
                Toggle={isMaingate}
              />
            </div>
            <div className="row clearfix">
              <InstumateStatusCard
                Icon={document.body.classList.contains("full-dark") ? AcIconGray : AcIcon}
                InstumentName="Air Conditioner"
                InstumentToggle="On"
                FirstPeraText="Temprature"
                FirstPeraValue="25° C"
                SecondPeraText="Status"
                SecondPeraValue="Cooling On"
              />
              <InstumateStatusCard
                Icon={document.body.classList.contains("full-dark") ? FridgeIconGray : FridgeIcon}
                InstumentName="Fridge"
                InstumentToggle="On"
                FirstPeraText="Temprature"
                FirstPeraValue="10° C"
                SecondPeraText="Status"
                SecondPeraValue="Stand By"
              />
              <InstumateStatusCard
                Icon={document.body.classList.contains("full-dark") ? WMIconGray : WMIcon}
                InstumentName="Washing Machine"
                InstumentToggle="On"
                FirstPeraText="Remaining Time"
                FirstPeraValue="01:32:21"
              />
            </div>
            <div className="row clearfix">
              <SwitchBordCard
                Buttons={buttonsIndoor}
                onPressDropDown={() => { this.props.onPressSwitchBordDropDown() }}
                onPressAllOnLight={() => { this.props.onPressSwithOnAllIn() }}
                onPressAllOffLight={() => { this.props.onPressAllOffLightIn() }}
                isDropdownShow={isIndoorDropdown}
                IsSwitch={switchBoardSwitch}
                OnPressSwitch={index =>
                  this.props.onPressSwitchBordButton(index)
                }
              />
              <SwitchBordCard
                onPressDropDown={() => { this.props.onPressOutdoorDropDown() }}
                isDropdownShow={isOutdoorDropdown}
                onPressAllOnLight={() => { this.props.onPressSwithOnAllOut() }}
                onPressAllOffLight={() => { this.props.onPressAllOffLightOut() }}
                Buttons={buttonsOutdoor}
                IsSwitch={switchOutBoardSwitch}
                OnPressSwitch={index =>
                  this.props.onPressOutSwitchBordButton(index)
                }
              />

              <SwitchBordCard
                disabledDropDown={true}
                Buttons={buttonsAppliences}
                IsSwitch={switchAppliencesBoardSwitch}
                OnPressSwitch={index =>
                  this.props.onPressAppliencesSwitchBordButton(index)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({
  isSecuritySystem: ioTReducer.isSecuritySystem,
  isMaingate: ioTReducer.isMaingate,
  switchBoardSwitch: ioTReducer.switchBoardSwitch,
  switchOutBoardSwitch: ioTReducer.switchOutBoardSwitch,
  switchAppliencesBoardSwitch: ioTReducer.switchAppliencesBoardSwitch,
  isIndoorDropdown: ioTReducer.isIndoorDropdown,
  isOutdoorDropdown: ioTReducer.isOutdoorDropdown
});

export default connect(mapStateToProps, {
  onPressSecuritySystem,
  onPressMainGate,
  onPressSwitchBordButton,
  onPressOutSwitchBordButton,
  onPressAppliencesSwitchBordButton,
  onPressSwitchBordDropDown,
  onPressOutdoorDropDown,
  onPressSwithOnAllOut,
  onPressAllOffLightOut,
  onPressSwithOnAllIn,
  onPressAllOffLightIn
})(IoT);
