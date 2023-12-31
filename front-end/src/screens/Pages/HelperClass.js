import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import FloatClasses from "../../components/Pages/FloatClasses";
import TextAlign from "../../components/Pages/TextAlign";
import MarginPaddingSpaces from "../../components/Pages/MarginPaddingSpaces";
import GridOptions from "../../components/Pages/GridOptions";
import ImageRadious from "../../components/Pages/ImageRadious";
import BorderColor from "../../components/Pages/BorderColor";

class HelperClass extends React.Component {
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
              HeaderText="Helper Class"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Helper Class", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <FloatClasses />
            </div>
            <div className="row clearfix">
              <TextAlign />
            </div>
            <div className="row clearfix">
              <MarginPaddingSpaces />
            </div>
            <div className="row clearfix">
              <GridOptions />
            </div>
            <div className="row clearfix">
              <ImageRadious />
            </div>
            <div className="row clearfix">
              <BorderColor />
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

export default connect(mapStateToProps, {})(HelperClass);
