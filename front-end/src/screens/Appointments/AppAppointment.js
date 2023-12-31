import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";

class AppAppointnment extends React.Component {
    state = {  } 
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
                        HeaderText="AppAppointnment"
                        Breadcrumb={[
                            { name: "AppAppointnment", navigate: "" },
                            { name: "AppAppointnment", navigate: "" },
                        ]}
                    />
                    <div>
                        <span>AppAppointnment</span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
 
//export default AppAppointnment;
const mapStateToProps = ({ ioTReducer }) => ({
    isSecuritySystem: ioTReducer.isSecuritySystem,
  });
export default connect(mapStateToProps, {})(AppAppointnment);