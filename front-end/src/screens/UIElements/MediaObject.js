import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UIMediaObjectDefault from "../../components/UIElements/UIMediaObjectDefault";
import UIMediaObjectAlignment from "../../components/UIElements/UIMediaObjectAlignment";
import { onPressSimpleTab } from "../../actions";

class UIMediaObject extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div
        onClick={() => {
          document.body.classList.remove("offcanvas-active");
        }}
      >
        <div>
          <div className="container-fluid">
            <PageHeader
              HeaderText="Media Object"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "Media Object", navigate: "" },
              ]}
            />
            <div className="row clearfix">
              <UIMediaObjectDefault />
              <UIMediaObjectAlignment />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({}) => ({});

export default connect(mapStateToProps, {
  onPressSimpleTab,
})(UIMediaObject);
