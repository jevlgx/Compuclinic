import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import BasicValidation from "../../components/Forms/BasicValidation";
import AdvancedValidation from "../../components/Forms/AdvancedValidation";

class FormValidation extends React.Component {
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
              HeaderText="Validation"
              Breadcrumb={[
                { name: "Form", navigate: "" },
                { name: "Validation", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <BasicValidation />
            </div>
            <div className="row clearfix">
              <AdvancedValidation />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(FormValidation);
