import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import ProfileHeaderCard from "../../components/Pages/ProfileHeaderCard";
import ProfileInfoCard from "../../components/Pages/ProfileInfoCard";
import FollowersCard from "../../components/Dashboard/FollowersCard";
import ProfileV2Tabs from "../../components/Pages/ProfileV2Tabs";
import ProfileIconCard from "../../components/Pages/ProfileIconCard";
import ProfileSliderCard from "../../components/Pages/ProfileSliderCard";

import { ProfileSliderData } from "../../Data/Charts";

class ProfileV2Page extends React.Component {
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
              HeaderText="User Profile v2"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Profile V2", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-4 col-md-12">
                <ProfileHeaderCard />
                <ProfileInfoCard />
                <FollowersCard HeaderText="Who to follow" />
              </div>
              <div className="col-lg-5 col-md-12">
                <ProfileV2Tabs />
              </div>
              <div className="col-lg-3 col-md-12">
                <ProfileIconCard />
                {ProfileSliderData.map((data, i) => {
                  return (
                    <ProfileSliderCard
                      key={i}
                      color={data.color}
                      data={data.data}
                      headerText={data.headerText}
                      subTitle={data.subTitle}
                    />
                  );
                })}
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

export default connect(mapStateToProps, {})(ProfileV2Page);
