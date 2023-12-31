import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import FileDocumentCard from "../../components/FileManager/FileDocumentCard";
import { fileDocumentCardData } from "../../Data/FileManagerData";

class FileDocuments extends React.Component {
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
              HeaderText="File Documents"
              Breadcrumb={[
                { name: "File Manager", navigate: "" },
                { name: "File Documents", navigate: "" },
              ]}
            />

            <div className="row clearfix">
              {fileDocumentCardData.map((data, i) => {
                return (
                  <FileDocumentCard
                    key={"isyugfui" + i}
                    DocumentIconClass={data.DocumentIconClass}
                    DocumentName={data.DocumentName}
                    DocumentSize={data.DocumentSize}
                    DocumentDate={data.DocumentDate}
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

export default connect(mapStateToProps, {})(FileDocuments);
