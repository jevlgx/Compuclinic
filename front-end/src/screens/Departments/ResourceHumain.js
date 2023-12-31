import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { Dropdown } from "react-bootstrap";
import Department from "../../components/Forms/BasicValidation";
import { CardModalHeader, ValidationModal } from "../../dataComponents/utils";
import { MedecinTableData, SecretaireTableData, CaissierTableData, InfirmierTableData, LaborantinTableData } from "../../dataComponents/RHDataComponent";
import { CreateEmployeeFormModal, EditEmployeeFormModal } from "../GRHs/CreateEmployeeModal";
// import AdvancedValidation from "../../components/Forms/AdvancedValidation";

export const RessourceHumainAction = () => {
  const RHAList = [{icon:"icon-user", text:"View", link:"#"}];
  return ( 
    <Dropdown>
      <Dropdown.Toggle
        // variant="none"
        // as="a"
        id="dropdown-basic"
        // className="user-name"
      >
        <span>Actions</span>
      </Dropdown.Toggle>

      <Dropdown.Menu className="dropdown-menu-right account">
        {RHAList.map((item, key)=> (
          <Dropdown.Item key={key} href={item.link}>
            <i key={`i-${key}`} className={item.icon}></i> {item.text}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
   );
}

class ResourceHumaine extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onTabChange = (e) => {
    var tab1 = document.getElementById("bacicTab3-1");
    tab1.classList.remove("active");
    tab1.children[0].classList.remove("active");
    var tab2 = document.getElementById("bacicTab3-2");
    tab2.classList.remove("active");
    tab2.children[0].classList.remove("active");
    var tab3 = document.getElementById("bacicTab3-3");
    tab3.classList.remove("active");
    tab3.children[0].classList.remove("active");
    var tab4 = document.getElementById("bacicTab3-4");
    tab4.classList.remove("active");
    tab4.children[0].classList.remove("active");
    var tab5 = document.getElementById("bacicTab3-5");
    tab5.classList.remove("active");
    tab5.children[0].classList.remove("active");
    var actab = document.getElementById("bacicTab3-" + e);
    actab.classList.add("active");
    actab.children[0].classList.add("active");

    var tabpan1 = document.getElementById("bacicTab3pan-1");
    tabpan1.classList.remove("active");
    var tabpan2 = document.getElementById("bacicTab3pan-2");
    tabpan2.classList.remove("active");
    var tabpan3 = document.getElementById("bacicTab3pan-3");
    tabpan3.classList.remove("active");
    var tabpan4 = document.getElementById("bacicTab3pan-4");
    tabpan4.classList.remove("active");
    var tabpan5 = document.getElementById("bacicTab3pan-5");
    tabpan5.classList.remove("active");
    var actabpab = document.getElementById("bacicTab3pan-" + e);
    actabpab.classList.add("active");
  };


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
              HeaderText="All Departments"
              Breadcrumb={[
                { name: "Departments", navigate: "" },
                { name: "Resourcehumain", navigate: "" },
              ]}
            />
            <div className="col-lg-12 col-md-12">
                  <div className="card">
                    <CreateEmployeeFormModal />
                    <EditEmployeeFormModal />
                    <ValidationModal />
                    <div className="body">
                      <CardModalHeader 
                        headerText="Ressouce Humain"
                        btnText="Add Employee"
                        modalId="createEmployeeModal"
                      />
                      <ul className="nav nav-tabs-new2" role="tablist">
                        <li
                          className="nav-item mr-1 active"
                          id="bacicTab3-1"
                          role="presentation"
                          onClick={() => {
                            this.onTabChange(1);
                          }}
                        >
                          <a className="nav-link active">Medicine</a>
                        </li>
                        <li
                          className="nav-item mr-1"
                          id="bacicTab3-2"
                          role="presentation"
                          onClick={() => {
                            this.onTabChange(2);
                          }}
                        >
                          <a className="nav-link" data-toggle="tab">
                            Secretaire
                          </a>
                        </li>
                        <li
                          className="nav-item mr-1"
                          id="bacicTab3-3"
                          role="presentation"
                          onClick={() => {
                            this.onTabChange(3);
                          }}
                        >
                          <a className="nav-link" data-toggle="tab">
                            Caissier
                          </a>
                        </li>
                        <li
                          className="nav-item mr-1"
                          id="bacicTab3-4"
                          role="presentation"
                          onClick={() => {
                            this.onTabChange(4);
                          }}
                        >
                          <a className="nav-link" data-toggle="tab">
                            Infirmier
                          </a>
                        </li>
                        <li
                          className="nav-item mr-1"
                          id="bacicTab3-5"
                          role="presentation"
                          onClick={() => {
                            this.onTabChange(5);
                          }}
                        >
                          <a className="nav-link" data-toggle="tab">
                            Laboratin
                          </a>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="bacicTab3pan-1" className="tab-pane show active">
                          <div className="col-lg-12">
                          <div className="card">
                            <MedecinTableData />
                          </div>
                        </div>
                        </div>
                        <div id="bacicTab3pan-2" className="tab-pane ">
                          <div className="col-lg-12">
                          <div className="card">
                            <SecretaireTableData />
                          </div>
                        </div>
                        </div>
                        <div id="bacicTab3pan-3" className="tab-pane">
                          <div className="col-lg-12">
                          <div className="card">
                            <CaissierTableData />
                          </div>
                        </div>
                        </div>
                        <div id="bacicTab3pan-4" className="tab-pane">
                          <div className="col-lg-12">
                          <div className="card">
                            <InfirmierTableData />
                          </div>
                        </div>
                        </div>
                        <div id="bacicTab3pan-5" className="tab-pane">
                          <div className="col-lg-12">
                          <div className="card">
                            <LaborantinTableData />
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            {/*<div className="row clearfix">
              <AdvancedValidation />
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(ResourceHumaine);
