import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import ProjectsListTable from "../../components/Pages/ProjectsListTable";
import { ProjectsData } from "../../Data/Pages";

class ProjectsList extends React.Component {
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
              HeaderText="Projects List"
              Breadcrumb={[
                { name: "Page", navigate: "" },
                { name: "Projects List", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12">
                <div className="card">
                  <div className="body project_report">
                    <ProjectsListTable bodyData={ProjectsData} />
                  </div>
                </div>
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

export default connect(mapStateToProps, {})(ProjectsList);
