import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { fileImagesCardData } from "../../Data/FileManagerData";
import FileDocumentCard from "../../components/FileManager/FileDocumentCard";

class FileImages extends React.Component {
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
              HeaderText="File Media"
              Breadcrumb={[
                { name: "File Manager", navigate: "" },
                { name: "File Media", navigate: "" },
              ]}
            />

            <div className="row clearfix">
              {fileImagesCardData.map((data, i) => {
                return (
                  <FileDocumentCard
                    key={i + "sih"}
                    ImageUrl={data.ImageUrl}
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

export default connect(mapStateToProps, {})(FileImages);
