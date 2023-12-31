import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import BasicElementExample from "../../components/Forms/BasicElementExample";
import DifferentSizing from "../../components/Forms/DifferentSizing";
import InputwithCheckbox from "../../components/Forms/InputwithCheckbox";
import MultipleAddons from "../../components/Forms/MultipleAddons";
import CustomCheckboxes from "../../components/Forms/CustomCheckboxes";
import InputButtonAddons from "../../components/Forms/InputButtonAddons";
import CustomForms from "../../components/Forms/CustomForms";

class BasicElements extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
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
              HeaderText="Basic Form Elements"
              Breadcrumb={[
                { name: "Form", navigate: "" },
                { name: "Basic Form Elements", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12">
                <BasicElementExample />
                <DifferentSizing />
                <InputwithCheckbox />
                <MultipleAddons />
                <CustomCheckboxes />
              </div>
              <div className="col-lg-6 col-md-12">
                <InputButtonAddons />
                <CustomForms />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(BasicElements);
