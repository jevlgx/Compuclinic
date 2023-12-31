import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import FileFolderCard from "../../components/FileManager/FileFolderCard";
import FileStorageCard from "../../components/FileManager/FileStorageCard";
import FileStorageStatusCard from "../../components/FileManager/FileStorageStatusCard";
import LineChartCard from "../../components/LineChartCard";
import {
  fileFolderCardData,
  fileStorageStatusCardData,
  areaChartFileReport,
} from "../../Data/FileManagerData";

class FileManagerDashboard extends React.Component {
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
              HeaderText="Dashboard"
              Breadcrumb={[
                { name: "File Manager", navigate: "" },
                { name: "File Manager", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              {fileFolderCardData.map((data, index) => {
                return <FileFolderCard key={index} HeaderText={data.Header} />;
              })}
            </div>
            <div className="row clearfix">
              <div className="col-lg-3 col-md-5 col-sm-12">
                <FileStorageCard TotalSize="1TB" UsedSize={45} />
                {fileStorageStatusCardData.map((data, index) => {
                  return (
                    <FileStorageStatusCard
                      key={index + "sidjpidj"}
                      TotalSize={data.TotalSize}
                      UsedSize={data.UsedSize}
                      Type={data.Type}
                      UsedPer={data.UsedPer}
                      ProgressBarClass={`${data.ProgressBarClass}`}
                    />
                  );
                })}
              </div>
              <div className="col-lg-9 col-md-7 col-sm-12">
                <LineChartCard
                  HeaderText="File Reports"
                  ChartOption={areaChartFileReport}
                />
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

export default connect(mapStateToProps, {})(FileManagerDashboard);
