import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { wapp } from "../../Data/Consts";
import DoctorProfileData from "../../dataComponents/DoctorProfileData";
import DoctorActivityProfileData from "../../dataComponents/DoctorActivityProfileData";

class DoctorProfile extends React.Component {
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
              HeaderText="Doctor Profile"
              Breadcrumb={[
                { name: "Doctors", navigate: `${wapp.DOCTOR.ALL}` },
                { name: "Doc Profile", navigate: `${wapp.CURRENT_PAGE}` },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-4 col-md-4 mx-5">
                <DoctorProfileData />
              </div>
              <div className="col-lg-6 col-md-6">
                <DoctorActivityProfileData />
              </div>
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

export default connect(mapStateToProps, {})(DoctorProfile);
