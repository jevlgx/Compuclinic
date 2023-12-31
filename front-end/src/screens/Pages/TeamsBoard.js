import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import TeamsBoardCard from "../../components/Pages/TeamsBoardCard";
import { TeamsBoardData } from "../../Data/Pages";

class TeamsBoard extends React.Component {
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
              HeaderText="Teams Board"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Teams Board", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              {TeamsBoardData.map((data, i) => {
                return (
                  <TeamsBoardCard
                    key={i}
                    teamName={data.teamName}
                    ranking={data.ranking}
                    images={data.images}
                    projects={data.projects}
                    budget={data.budget}
                    progress={data.progress}
                    progressType={data.progressType}
                    isDropdown={data.isDropdown}
                  />
                );
              })}
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

export default connect(mapStateToProps, {})(TeamsBoard);
