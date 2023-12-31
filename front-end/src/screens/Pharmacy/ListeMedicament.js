import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { Dropdown } from "react-bootstrap";


// import BasicElementExample from "../../components/Forms/BasicElementExample";
// import DifferentSizing from "../../components/Forms/DifferentSizing";
// import InputwithCheckbox from "../../components/Forms/InputwithCheckbox";
// import MultipleAddons from "../../components/Forms/MultipleAddons";
// import CustomCheckboxes from "../../components/Forms/CustomCheckboxes";
// import InputButtonAddons from "../../components/Forms/InputButtonAddons";
// import CustomForms from "../../components/Forms/CustomForms";

class ListeMedicament extends React.Component {
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
    var actab = document.getElementById("bacicTab3-" + e);
    actab.classList.add("active");
    actab.children[0].classList.add("active");

    var tabpan1 = document.getElementById("bacicTab3pan-1");
    tabpan1.classList.remove("active");
    var tabpan2 = document.getElementById("bacicTab3pan-2");
    tabpan2.classList.remove("active");
    var tabpan3 = document.getElementById("bacicTab3pan-3");
    tabpan3.classList.remove("active");
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
              HeaderText="Medications list"
              Breadcrumb={[
                { name: "Pharmacy", navigate: "" },
                { name: "Medications list", navigate: "" },
              ]}
            />
            <div className="col-lg-12 col-md-12">
                  <div className="card">
                    <div className="header">
                      <h2>
                        Medications list
                      </h2>
                    <div className="rightheader">
                        <a className="btn btn-primary" href="ajouterMedicament"> Ajouter Medicament </a>
                    </div>
                  </div>
                    <div className="body">
                      <ul className="nav nav-tabs-new2" role="tablist">
                        <li
                          className="nav-item mr-1 active"
                          id="bacicTab3-1"
                          role="presentation"
                          onClick={() => {
                            this.onTabChange(1);
                          }}
                        >
                          <a className="nav-link active">Medications</a>
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
                            Internement
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

                        </li>
                      </ul>
                      <div className="tab-content">
                        <div id="bacicTab3pan-1" className="tab-pane show active">
                          <div className="col-lg-12">
                          <div className="card">
                            <div className="body table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>Medication wording</th>
                                    <th>Family wording</th>
                                    <th>Conditioning</th>
                                    <th>Rayon</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>CAC1000</td>
                                    <td>Vitamine</td>
                                    <td>Tablets of 10</td>
                                    <td>D</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                     
                                    </Dropdown.Menu>
                                    </Dropdown>
                                  </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>ARTEFAN</td>
                                    <td>Antimalarial</td>
                                    <td>Tablets of 6</td>
                                    <td>B</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                    
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>ACLAV 1g/125mg</td>
                                    <td>Antibiotic</td>
                                    <td>Sachets</td>
                                    <td>O</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                    <td>CO-ARINATE</td>
                                    <td>Antimalarial</td>
                                    <td>Tablets of 6</td>
                                    <td>A</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                    
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">5</th>
                                    <td>UTEPLEX</td>
                                    <td>Jellybean</td>
                                    <td>@lajelly</td>
                                    <td>C</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">6</th>
                                    <td>ZENTEL</td>
                                    <td>Deworming drug</td>
                                    <td>tablet of 1</td>
                                    <td>M</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                     
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">7</th>
                                    <td>BRUSTAN</td>
                                    <td>Kikat</td>
                                    <td>@lakitkat</td>
                                    <td>W</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                     
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">8</th>
                                      <td>RODOGYL</td>
                                      <td>Dental painkiller</td>
                                      <td>@lakitkat</td>
                                      <td>H</td>
                                      <td><Dropdown>
                                      <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                     
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">9</th>
                                    <td>CASHNERVE</td>
                                    <td>Kikat</td>
                                    <td>@lakitkat</td>
                                    <td>E</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                     
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">10</th>
                                    <td>PANADOL EXTRA</td>
                                    <td>Painkiller</td>
                                    <td>Tablets of 20</td>
                                    <td>G</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                     
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">11</th>
                                    <td>ACTINAC plus</td>
                                    <td>Kikat</td>
                                    <td>@lakitkat</td>
                                    <td>E</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Interner
                                      </Dropdown.Item>
                                     
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div id="bacicTab3pan-2" className="tab-pane ">
                          <div className="col-lg-12">
                          <div className="card">
                            <div className="body table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>FIRST NAME</th>
                                    <th>LAST NAME</th>
                                    <th>USERNAME</th>
                                    <th>ACTION</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Externer
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Externer
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Externer
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td>Jellybean</td>
                                    <td>@lajelly</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Externer
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">5</th>
                                    <td>Larry</td>
                                    <td>Kikat</td>
                                    <td>@lakitkat</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      <Dropdown.Item href="appinbox">
                                        {" "}
                                        <i className="icon-envelope-open"></i>Externer
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div id="bacicTab3pan-3" className="tab-pane">
                          <div className="col-lg-12">
                          <div className="card">
                            <div className="body table-responsive">
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th>#</th>
                                    <th>FIRST NAME</th>
                                    <th>LAST NAME</th>
                                    <th>USERNAME</th>
                                    <th>ACTION</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown></td>
                                  </tr>
                                  <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td>Jellybean</td>
                                    <td>@lajelly</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                     
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th scope="row">5</th>
                                    <td>Larry</td>
                                    <td>Kikat</td>
                                    <td>@lakitkat</td>
                                    <td>
                                    <Dropdown>
                                    <Dropdown.Toggle
                                      // variant="none"
                                      // as="a"
                                      id="dropdown-basic"
                                      // className="user-name"
                                    >
                                      <span>Action</span>
                                    </Dropdown.Toggle>
                    
                                    <Dropdown.Menu className="dropdown-menu-right account">
                                      <Dropdown.Item href="profilev2page">
                                        <i className="icon-user"></i>Edit
                                      </Dropdown.Item>
                                      
                                    </Dropdown.Menu>
                                    </Dropdown>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            {/*<div className="row clearfix">
              <div className="col-lg-6 col-md-12">
                
                <DifferentSizing />
                <InputwithCheckbox />
                <MultipleAddons />
                <CustomCheckboxes />
              </div>
              <div className="col-lg-6 col-md-12">
                <InputButtonAddons />
                <CustomForms />
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(ListeMedicament);
