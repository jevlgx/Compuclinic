import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { wapp } from "../../Data/Consts";
import DoctorProfileData from "../../dataComponents/DoctorProfileData";
import PatientProfileData from "../../dataComponents/PatientProfileData";
import { Tab, Tabs } from "react-bootstrap";
import ProfileV1Setting from "../../components/Pages/ProfileV1Setting";
import ProfileSliderCard from "../../components/Pages/ProfileSliderCard";
import ProfileIconCard from "../../components/Pages/ProfileIconCard";
import ProfileTabs from "../../components/Pages/ProfileTabs";
import FollowersCard from "../../components/Dashboard/FollowersCard";
import ProfileInfoCard from "../../components/Pages/ProfileInfoCard";
import ProfileHeaderCard from "../../components/Pages/ProfileHeaderCard";

import { ProfileSliderData } from "../../Data/Charts";

class PatientProfile extends React.Component {
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
              HeaderText="Secretariat"
              Breadcrumb={[
                { name: "Patients", navigate: `${wapp.DEPARTMENT.SECRETARY}` },
                { name: "Patient Folder", navigate: `${wapp.CURRENT_PAGE}` },
              ]}
            />
            <div className="row clearfix">
              <>
                <PatientProfileData />
              </>
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

export default connect(mapStateToProps, {})(PatientProfile);
