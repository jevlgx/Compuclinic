import React from "react";
import { connect } from "react-redux";
import PageHeader from "../../components/PageHeader";
import { Dropdown } from "react-bootstrap";
import Department from "../../components/Forms/BasicValidation";
// import AdvancedValidation from "../../components/Forms/AdvancedValidation";

class PlateauTechnique extends React.Component {
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
              HeaderText="All Departments"
              Breadcrumb={[
                { name: "Departments", navigate: "" },
                { name: "Plateau Technique", navigate: "" },
              ]}
            />
            <div className="col-lg-12 col-md-12">
            <div className="card">
              <div className="header">
                <h2>
                Plateau Technique
                </h2>
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
                    <a className="nav-link active">Chambre</a>
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
                      Lit
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
                      Batiment
                    </a>
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
                              <th>numero</th>
                              <th>Nombre_lit</th>
                              <th>batiment</th>
                              <th>type</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              
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
                                <Dropdown.Item href="login">
                                  {" "}
                                  Commune
                                </Dropdown.Item>
                              </Dropdown.Menu>
                              </Dropdown>
                            </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              
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
                                <Dropdown.Item href="login">
                                  {" "}
                                  Commune
                                </Dropdown.Item>
                              </Dropdown.Menu>
                              </Dropdown>
                            </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              
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
                                <Dropdown.Item href="login">
                                  {" "}
                                  Commune
                                </Dropdown.Item>
                              </Dropdown.Menu>
                              </Dropdown>
                            </td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Larry</td>
                              <td>Jellybean</td>
                              
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
                                <Dropdown.Item href="login">
                                  {" "}
                                  Commune
                                </Dropdown.Item>
                              </Dropdown.Menu>
                              </Dropdown>
                            </td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Larry</td>
                              <td>Kikat</td>
                          
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
                                <Dropdown.Item href="login">
                                  {" "}
                                  Commune
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
                  <div id="bacicTab3pan-2" className="tab-pane ">
                    <div className="col-lg-12">
                    <div className="card">
                      <div className="body table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>numero</th>
                              <th>date_enregistrement</th>
                              <th>chambre</th>
                              <th>est_libre</th>
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
                                  <i className="icon-user"></i>NON
                                </Dropdown.Item>
                                <Dropdown.Item href="profilev2page">
                                  <i className="icon-user"></i>OUI
                                </Dropdown.Item>
                                
                              </Dropdown.Menu>
                              </Dropdown></td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
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
                                  <i className="icon-user"></i>NON
                                </Dropdown.Item>
                                <Dropdown.Item href="profilev2page">
                                  <i className="icon-user"></i>OUI
                                </Dropdown.Item>
                                
                              </Dropdown.Menu>
                              </Dropdown></td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
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
                                  <i className="icon-user"></i>NON
                                </Dropdown.Item>
                                <Dropdown.Item href="profilev2page">
                                  <i className="icon-user"></i>OUI
                                </Dropdown.Item>
                                
                              </Dropdown.Menu>
                              </Dropdown></td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Larry</td>
                              <td>Jellybean</td>
                              <td>@lajelly</td>
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
                                  <i className="icon-user"></i>NON
                                </Dropdown.Item>
                                <Dropdown.Item href="profilev2page">
                                  <i className="icon-user"></i>OUI
                                </Dropdown.Item>
                                
                              </Dropdown.Menu>
                              </Dropdown></td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Larry</td>
                              <td>Kikat</td>
                              <td>@lakitkat</td>
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
                                  <i className="icon-user"></i>NON
                                </Dropdown.Item>
                                <Dropdown.Item href="profilev2page">
                                  <i className="icon-user"></i>OUI
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
                  <div id="bacicTab3pan-3" className="tab-pane">
                    <div className="col-lg-12">
                    <div className="card">
                      <div className="body table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>NOM</th>
                              <th>DESCRIPTION</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              
                             
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              
                              
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              
                              
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Larry</td>
                              <td>Jellybean</td>
                              
                             
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Larry</td>
                              <td>Kikat</td>
                              
                              
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
              <AdvancedValidation />
            </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ ioTReducer }) => ({});

export default connect(mapStateToProps, {})(PlateauTechnique);
