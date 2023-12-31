import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import BasicTable from "../../components/Tables/BasicTable";
import StripedRows from "../../components/Tables/StripedRows";
import BorderedTable from "../../components/Tables/BorderedTable";
import HoverRows from "../../components/Tables/HoverRows";

class TableNormal extends React.Component {
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
              HeaderText="Table Normal"
              Breadcrumb={[
                { name: "Table", navigate: "" },
                { name: "Table Normal", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <BasicTable />
              <StripedRows />
              <BorderedTable />
              <HoverRows />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(TableNormal);
