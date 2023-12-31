import React from "react";
import { connect } from "react-redux";
import { Countries, Languages, TimeZones } from "../../Data/Consts";
import { UpdatePatientOverviewModal, UpdatePatientContactsModal, UpdatePatientBillsModal  } from "../../screens/Patients/UpdatePatientModal";
import { onPresAddEvent } from "../../actions";
import { CardModalHeader } from "../../dataComponents/utils";

class ProfileTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "overview",
      openModal: false,
    };
  }
  render() {
    const { tab, openModal } = this.state;
    const { patient } = this.props;
    
    return (
      <div>
        <div className="card">
          <div className="body">
            <ul className="nav nav-tabs-new">
              <li className="nav-item  mr-1">
                <a
                  className={`nav-link ${tab==="overview" ? "active" : ""}`}
                  onClick={() => {
                    this.setState({ tab: "overview" });
                  }}
                >
                  {" "}
                  Overview
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${tab==="contacts" ? "active" : ""}`}
                  onClick={() => {
                    this.setState({ tab: "contacts" });
                  }}
                >
                  {" "}
                  Id & Contacts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${tab==="billings" ? "active" : ""}`}
                  onClick={() => {
                    this.setState({ tab: "billings" });
                  }}
                >
                  {" "}
                  Billings
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content padding-0">
          <div className={`tab-pane ${tab==="overview" ? "active show" : ""}`} id="Overview">
            <div className="card">
              <UpdatePatientOverviewModal data={patient}/>
                <div className="body">
                  <CardModalHeader 
                    headerText="Patient Overview"
                    btnText="Edit"
                    modalId="updateOverviewModal"
                  />
                  <div className="row clearfix">
                    <div className="col-lg-12 col-md-12">
                      <div className="row clearfix">
                        <div className="col">
                        <label>
                            <small className="text-muted">First Name</small>
                        </label>
                        <div className="form-group">
                          <h6>{patient.prenom}</h6>
                        </div>
                        {" "}
                        </div>
                        <div className="col">
                          <label>
                            <small className="text-muted">Last Name</small>
                          </label>
                          <div className="form-group">
                            <h6>{patient.nom}</h6>
                          </div>
                        </div>
                        <div className="col">
                          <label>
                            <small className="text-muted">Sexe</small>
                          </label>
                          <div className="form-group">
                              <div>
                                <label className="fancy-radio">
                                  {patient.sexe==="M" ?
                                    (<span>
                                      <i></i>Male
                                    </span>
                                    ):(<span>
                                    <i></i>Female
                                    </span>)
                                  }
                                </label>
                              </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="row clearfix">
                        <div className="col">
                          {" "}
                          <label>
                            <small className="text-muted">Birthdate</small>
                          </label>
                          <div className="form-group">
                            <div className="input-group">
                              <h6>{patient.date_naissance}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          {" "}
                          <label>
                            <small className="text-muted">Birth Place</small>
                          </label>
                          <div className="form-group">
                            <h6>{patient.lieu_naissance}</h6>
                          </div>
                        </div>
                        <div className="col"> {" "} </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="row clearfix">
                        <div className="col">
                          {" "}
                          <label>
                            <small className="text-muted">Address</small>
                          </label>
                          <div className="form-group">
                            <h6>{patient.domicile}</h6>
                          </div>
                        </div>
                        <div className="col">
                          {" "}
                          <label>
                            <small className="text-muted">Ville</small>
                          </label>
                          <div className="form-group">
                            <h6>{patient.ville?patient.ville:"NaN"}</h6>
                          </div>
                        </div>
                        <div className="col">
                          {" "}
                          <label>
                            <small className="text-muted">Nationalité</small>
                          </label>
                          <div className="form-group">
                              {Countries.map((country, i) => {
                                if(country.code===patient.nationalite) return (<h6 key={country.code+'-'+i}>{country.name}</h6>
                                )
                              })}
                          </div>
                        </div>
                      </div>
                      <>
                        {" "}
                        <label>
                          <small className="text-muted">Statut</small>
                        </label>
                        <div className="form-group">
                          <h6>{patient.statut}</h6>
                        </div>
                      </>
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6">
                          {" "}
                          <label>
                            <small className="text-muted">Symptômes</small>
                          </label>
                          
                          <div className="form-group d-block">
                            <ul className="list-group list-group-flush">
                              { patient.symptomes.split(',').map((diseace,i)=>{
                                return(<li key={diseace + '-' + i} className="list-group-item">{diseace}</li>)
                              }) }
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          {" "}
                          <label>
                            <small className="text-muted">Antécédents médicaux</small>
                          </label>
                          
                          <div className="form-group d-block">
                            <ul className="list-group list-group-flush">
                              { patient.antecedent.split(',').map((diseace,i)=>{
                                return(<li key={diseace + '-' + i} className="list-group-item">{diseace}</li>)
                              }) }
                            </ul>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary btn-block">
                    Update
                  </button>
                  &nbsp;&nbsp;
                  {" "}
                </div>
            </div>
          </div>

          <div className={`tab-pane ${tab==="contacts" ? "active show" : ""}`} id="Contact">
            <div className="card">
              <UpdatePatientContactsModal data={patient} contact={true}/>
              <div className="body">
                <CardModalHeader 
                  headerText="Patient Contacts"
                  btnText="Edit contact"
                  modalId="updateContactsModal"
                />
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12">
                  {" "}
                    <label>
                      <small className="text-muted">Matricule</small>
                    </label>
                    <div className="form-group">
                      <h6>{patient.matricule}</h6>
                    </div>
                    
                    
                    {" "}
                    <label>
                      <small className="text-muted">Téléphone</small>
                    </label>
                    <div className="form-group">
                      <h6>{patient.telephone}</h6>
                    </div>
                    {" "}
                    <label>
                      <small className="text-muted">Email</small>
                    </label>
                    <div className="form-group">
                      <h6>{patient.email}</h6>
                    </div>  
                  </div>

                </div>
                
              </div>
            </div>

            <div className="card">
              <UpdatePatientContactsModal data={patient} contact={false}/>
              <div className="body">
                <CardModalHeader 
                  headerText="Id & Localisation"
                  btnText="Edit Locations"
                  modalId="updateContactsLocationModal"
                />
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                  {" "}
                    <label>
                      <small className="text-muted">CNI</small>
                    </label>
                    <div className="form-group">
                      <h6>{patient.CNI}</h6>
                    </div>
                    <div className="row clearfix">
                      <div className="col">
                        {" "}
                        <label>
                          <small className="text-muted">Address</small>
                        </label>
                        <div className="form-group">
                          <h6>{patient.address?patient.address:"NaN"}</h6>
                        </div>
                      </div>
                      <div className="col">
                        {" "}
                        <label>
                          <small className="text-muted">Language</small>
                        </label>
                          <h6>{patient.language?patient.language:"NaN"}</h6>
                        <div className="form-group">
                          <select className="form-control" defaultValue="en_US">
                          {Languages.map((language, i) => {
                                //if(language.code===patient.language) 
                                return (<option key={language.code+'-'+i} value={language.code}>{language.name}</option>
                                )
                              })}
                          </select>
                        </div>
                      </div>
                    </div>
                    
                   
                    {" "}
                    <label>
                      <small className="text-muted">Time Zone</small>
                    </label>
                      <h6>{patient.timezone?patient.timezone:"NaN"}</h6>
                    <div className="form-group">
                      <select className="form-control" defaultValue="UTC-5">
                        {TimeZones.map((timeZone, i) => {
                            //if(country.code===patient.timezone) 
                            return (<option key={timeZone.name+'-'+i} value={timeZone.timezone}>{timeZone.timezone}</option>
                            )
                          })}
                      </select>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>

          
          <div className={`tab-pane ${tab==="billings" ? "active show" : ""}`} id="Billings">
            <div className="card">
              <UpdatePatientBillsModal data={patient}/>
              
              <div className="body">
                <CardModalHeader 
                  headerText="Bills"
                  // btnText="Edit"
                  modalId="updateBillsModal"
                />
                <h6>Billing History</h6>
                <table className="table billing-history">
                  <thead className="sr-only">
                    <tr>
                      <th>Infos</th>
                      <th>Amount</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h3 className="billing-title">
                          Consultation{" "}
                          <span className="invoice-number">
                            #LA35628
                          </span>
                        </h3>
                        <span className="text-muted">
                          Charged at April 17, 2018
                        </span>
                      </td>
                      <td className="amount">2900 Fcfa</td>
                      <td className="action">
                        <a>View</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="billing-title">
                          Bilan de santé{" "}
                          <span className="invoice-number">
                            #LA3599
                          </span>
                        </h3>
                        <span className="text-muted">
                          Charged at March 18, 2018
                        </span>
                      </td>
                      <td className="amount">5900 Fcfa</td>
                      <td className="action">
                        <a>View</a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h3 className="billing-title">
                          Dépistage{" "}
                          <span className="invoice-number">
                            #LA1245
                          </span>
                        </h3>
                        <span className="text-muted">
                          Charged at Feb 02, 2018
                        </span>
                      </td>
                      <td className="amount">8900 Fcfa</td>
                      <td className="action">
                        <a>View</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* JQuery data table from Lucid bootstrap */}
                <div className="col-lg-12">
                    <div className="card">
                        <div className="header">
                            <h2>Basic Table <small>Basic example without any additional modification classes</small> </h2>                            
                        </div>
                        <div className="body">
                          <div className="table-responsive">
                            <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper dt-bootstrap4">
                              <div className="row">
                                <div className="col-sm-12 col-md-6">
                                  <div className="dataTables_length" id="DataTables_Table_0_length">
                                    <label>Show 
                                      <select name="DataTables_Table_0_length" aria-controls="DataTables_Table_0" className="form-control">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                      </select>
                                      entries
                                    </label>
                                  </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                  <div id="DataTables_Table_0_filter" className="dataTables_filter">
                                    <label>Search:<input type="search" className="form-control" placeholder="" aria-controls="DataTables_Table_0"/>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12">
                                  <table className="table table-hover js-basic-example dataTable table-custom" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                    <thead className="thead-dark">
                                      <tr role="row">
                                        <th className="sorting_asc" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{width: "184.283px"}} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                          Bill Id
                                        </th>
                                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{width: "298.3px"}} aria-label="Position: activate to sort column ascending">
                                          Amount
                                        </th>
                                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{width: "139.483px"}} aria-label="Office: activate to sort column ascending">
                                          Status
                                        </th>
                                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{width: "128.45px"}} aria-label="Start date: activate to sort column ascending">
                                          Date
                                        </th>
                                        <th className="sorting" tabIndex="0" aria-controls="DataTables_Table_0" rowSpan="1" colSpan="1" style={{width: "108.4px"}} aria-label="Salary: activate to sort column ascending">
                                          Action
                                        </th>
                                      </tr>
                                    </thead>
                                    <tfoot>
                                      <tr>
                                        <th rowSpan="1" colSpan="1">Bill Id</th>
                                        <th rowSpan="1" colSpan="1">Amount</th>
                                        <th rowSpan="1" colSpan="1">Status</th>
                                        <th rowSpan="1" colSpan="1">Date</th>
                                        <th rowSpan="1" colSpan="1">Action</th>
                                      </tr>
                                    </tfoot>
                                    <tbody> 
                                      <tr role="row" className="odd">
                                        <td className="sorting_1">Airi Satou</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        
                                        <td>2008/11/28</td>
                                        <td>$162,700</td>
                                      </tr>
                                      <tr role="row" className="even">
                                        <td className="sorting_1">Angelica Ramos</td>
                                        <td>Chief Executive</td>
                                        <td>London</td>
                                        
                                        <td>2009/10/09</td>
                                        <td>$1,200,000</td>
                                      </tr>
                                      <tr role="row" className="odd">
                                        <td className="sorting_1">Ashton Cox</td>
                                        <td>Junior</td>
                                        <td>San</td>
                                        
                                        <td>2009/01/12</td>
                                        <td>$86,000</td>
                                      </tr>
                                      <tr role="row" className="even">
                                        <td className="sorting_1">Bradley</td>
                                        <td>Software</td>
                                        <td>London</td>
                                        
                                        <td>2012/10/13</td>
                                        <td>$132,000</td>
                                      </tr>
                                      <tr role="row" className="odd">
                                        <td className="sorting_1">Brenden</td>
                                        <td>Software</td>
                                        <td>San</td>
                                        
                                        <td>2011/06/07</td>
                                        <td>$206,850</td>
                                      </tr>
                                      <tr role="row" className="even">
                                        <td className="sorting_1">Brielle</td>
                                        <td>Integration</td>
                                        <td>New York</td>
                                        
                                        <td>2012/12/02</td>
                                        <td>$372,000</td>
                                      </tr>
                                      <tr role="row" className="odd">
                                        <td className="sorting_1">Bruno Nash</td>
                                        <td>Software</td>
                                        <td>London</td>
                                        
                                        <td>2011/05/03</td>
                                        <td>$163,500</td>
                                      </tr>
                                      <tr role="row" className="even">
                                        <td className="sorting_1">Caesar</td>
                                        <td>Pre-Sales Support</td>
                                        <td>New York</td>
                                        
                                        <td>2011/12/12</td>
                                        <td>$106,450</td>
                                      </tr>
                                      <tr role="row" className="odd">
                                        <td className="sorting_1">Cara</td>
                                        <td>Sales Assistant</td>
                                        <td>New York</td>
                                        
                                        <td>2011/12/06</td>
                                        <td>$145,600</td>
                                      </tr>
                                      <tr role="row" className="even">
                                        <td className="sorting_1">Cedric</td>
                                        <td>Senior Javascript</td>
                                        <td>Edinburgh</td>
                                        
                                        <td>2012/03/29</td>
                                        <td>$433,060</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-sm-12 col-md-5">
                                  <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
                                  </div>
                                  <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                      <ul className="pagination">
                                        <li className="paginate_button page-item previous disabled" id="DataTables_Table_0_previous">
                                          <a href="#" aria-controls="DataTables_Table_0" data-dt-idx="0" tabIndex="0" className="page-link">Previous</a>
                                        </li>
                                        <li className="paginate_button page-item active"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="1" tabIndex="0" className="page-link">1</a></li>
                                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="2" tabIndex="0" className="page-link">2</a></li>
                                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="3" tabIndex="0" className="page-link">3</a></li>
                                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="4" tabIndex="0" className="page-link">4</a></li>
                                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="5" tabIndex="0" className="page-link">5</a></li>
                                        <li className="paginate_button page-item "><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="6" tabIndex="0" className="page-link">6</a></li>
                                        <li className="paginate_button page-item next" id="DataTables_Table_0_next"><a href="#" aria-controls="DataTables_Table_0" data-dt-idx="7" tabIndex="0" className="page-link">Next</a></li>
                                      </ul>
                                    </div>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary">
                  Update
                </button>
                <button type="button" className="btn btn-default">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        
          <div className={`tab-pane ${tab==="preferences" ? "active show" : ""}`} id="Preferences">
            <div className="card">
              <div className="row clearfix">
                <div className="col-lg-6 col-md-12">
                  <div className="body">
                    <h6>Your Login Sessions</h6>
                    <ul className="list-unstyled list-login-session">
                      <li>
                        <div className="login-session">
                          <i className="fa fa-laptop device-icon"></i>
                          <div className="login-info">
                            <h3 className="login-title">
                              Mac - New York, United States
                            </h3>
                            <span className="login-detail">
                              Chrome -{" "}
                              <span className="text-success">
                                Active Now
                              </span>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="login-session">
                          <i className="fa fa-desktop device-icon"></i>
                          <div className="login-info">
                            <h3 className="login-title">
                              Windows 10 - New York, United States
                            </h3>
                            <span className="login-detail">
                              Firefox - about an hour ago
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-link btn-logout"
                            data-container="body"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Close this login session"
                          >
                            <i className="fa fa-times-circle text-danger"></i>
                          </button>
                        </div>
                      </li>
                      <li>
                        <div className="login-session">
                          <i className="fa fa-mobile fa-fw device-icon"></i>
                          <div className="login-info">
                            <h3 className="login-title">
                              Android - New York, United States
                            </h3>
                            <span className="login-detail">
                              Android Browser - yesterday
                            </span>
                          </div>
                          <button
                            type="button"
                            className="btn btn-link btn-logout"
                            data-container="body"
                            data-toggle="tooltip"
                            title=""
                            data-original-title="Close this login session"
                          >
                            <i className="fa fa-times-circle text-danger"></i>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="body">
                    <h6>Connected Social Media</h6>
                    <ul className="list-unstyled list-connected-app">
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-facebook app-icon"></i>
                          <div className="connection-info">
                            <h3 className="app-title">FaceBook</h3>
                            <span className="actions">
                              <a>View Permissions</a>{" "}
                              <a className="text-danger">
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-twitter app-icon"></i>
                          <div className="connection-info">
                            <h3 className="app-title">Twitter</h3>
                            <span className="actions">
                              <a>View Permissions</a>{" "}
                              <a className="text-danger">
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-instagram app-icon"></i>
                          <div className="connection-info">
                            <h3 className="app-title">Instagram</h3>
                            <span className="actions">
                              <a>View Permissions</a>{" "}
                              <a className="text-danger">
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-linkedin app-icon"></i>
                          <div className="connection-info">
                            <h3 className="app-title">Linkedin</h3>
                            <span className="actions">
                              <a>View Permissions</a>{" "}
                              <a className="text-danger">
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="connected-app">
                          <i className="fa fa-vimeo app-icon"></i>
                          <div className="connection-info">
                            <h3 className="app-title">Vimeo</h3>
                            <span className="actions">
                              <a>View Permissions</a>{" "}
                              <a className="text-danger">
                                Revoke Access
                              </a>
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(ProfileTabs);
