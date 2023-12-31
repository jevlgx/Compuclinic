import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import UIListGroupBasic from "../../components/UIElements/UIListGroupBasic";
import UIListGroupActive from "../../components/UIElements/UIListGroupActive";
import UIListGroupLinksandbuttons from "../../components/UIElements/UIListGroupLinksAndbuttons";
import UIListGroupColor from "../../components/UIElements/UIListGroupColor";
import UIListGroupCustomcontent from "../../components/UIElements/UIListGroupCustomcontent";
import { onPressSimpleTab } from "../../actions";

class UIListGroup extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { activeTabData, isTabExpend, wind } = this.props;
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
              HeaderText="List Group"
              Breadcrumb={[
                { name: "UI Elements", navigate: "" },
                { name: "List Group", navigate: "" },
              ]}
            />
            <UIListGroupBasic />
            <div className="row clealfix">
              <UIListGroupActive />
              <div className="col-lg-6 col-md-12">
                <div className="card">
                  <div className="header">
                    <h2>Disabled items</h2>
                  </div>
                  <div className="body">
                    <ul className="list-group">
                      <li className="list-group-item disabled">
                        Cras justo odio
                      </li>
                      <li className="list-group-item">
                        Dapibus ac facilisis in
                      </li>
                      <li className="list-group-item">Morbi leo risus</li>
                      <li className="list-group-item">
                        Porta ac consectetur ac
                      </li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <UIListGroupLinksandbuttons />
            <div className="row clealfix">
              <div className="col-md-12">
                <UIListGroupColor />
                <UIListGroupCustomcontent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({
  activeTabData: UIElementsReducer.activeTabData,
});

export default connect(mapStateToProps, {
  onPressSimpleTab,
})(UIListGroup);
