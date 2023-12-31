import React, { useState } from "react";
import { Countries, Languages, TimeZones } from "../../Data/Consts";

export const UpdateEmployeeOverviewModal = ({ isModalOpen=false, data }) => {

    //const [modalStatus,setModalStatus] = useState(false)

    //isModalOpen && setModalStatus(true);

    return ( 
        <>
        {isModalOpen && document.getElementById("updateOverviewModal")?.classList.toggle("show")}
      <div
        id="updateOverviewModal"
        //className={isModalOpen ? "modal fade show" : "modal fade"}
        className={"modal fade"}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="defaultModalLabel">
                Update Profile
              </h4>
            </div>
            <div className="modal-body">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12">
                        <label>
                            <small className="text-muted">First Name</small>
                        </label>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={data.prenom}
                            />
                        </div>
                        {" "}
                        <label>
                            <small className="text-muted">Last Name</small>
                        </label>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder={data.nom}
                            />
                        </div>
                        <div className="form-group">
                        </div>
                        <div className="row clearfix">
                            {" "}
                            <div className="col-md-6">
                                <label>
                                    <small className="text-muted">Birthdate</small>
                                </label>
                                <div className="form-group">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="icon-calendar"></i>
                                        </span>
                                        </div>
                                        <input
                                        data-provide="datepicker"
                                        data-date-autoclose="true"
                                        className="form-control"
                                        placeholder={data.date_naissance}
                                        />
                                    </div>
                                </div>
                            </div>
                            {" "}
                            <div className="col-md-6">
                                <label>
                                    <small className="text-muted">Birth Place</small>
                                </label>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={data.lieu_naissance}
                                        placeholder="Yaoundé 3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                    {" "}
                        <label>
                        <small className="text-muted">Address</small>
                        </label>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={data.domicile}
                            placeholder="Address Line 1"
                        />
                        </div>
                        {" "}
                        <label>
                        <small className="text-muted">Statut</small>
                        </label>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            defaultValue={data.statut}
                            placeholder="Interne/Externe"
                        />
                        </div>
                        <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                        />
                        </div>
                        {" "}
                        <label>
                        <small className="text-muted">Nationalité</small>
                        </label>
                        <div className="form-group">
                          <select className="form-control" 
                              defaultValue={data.nationalite} 
                              defaultChecked={data.nationalite}
                              >
                              <option value="">-- Select Country --</option>
                              {Countries.map((country, i)=>{
                              return (
                                  <option key={country.code} value={country.code}>{country.name}</option>
                              )
                              })}
                          </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-footer row clearfix">
                <div className="col">
                    <button type="button" className="btn btn-primary btn-block"
                        onClick={() => {
                            //this.props.onPresAddEvent();
                            //setModalStatus(false)
                            document.getElementById("updateOverviewModal").classList.toggle("show")
                        }}
                    >
                        Add
                    </button>
              </div>
              <div className="col">
                <button
                    type="button"
                    onClick={() => {
                    //this.props.onPresAddEvent();
                    //setModalStatus(false)
                    document.getElementById("updateOverviewModal").classList.toggle("show")
                    }}
                    className="btn btn-simple btn-block btn-danger"
                    data-dismiss="modal"
                >
                    CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );

}

export const UpdateEmployeeContactsModal = ({ isModalOpen=false, data, contact }) => {

    
    if (contact === true) return ( 
        <>
        {isModalOpen && document.getElementById("updateContactsModal")?.classList.toggle("show")}
      <div
        id="updateContactsModal"
        //className={isModalOpen ? "modal fade show" : "modal fade"}
        className={"modal fade"}
        role="dialog"
      >
        
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="defaultModalLabel">
                Update Profile
              </h4>
            </div>
            <div className="modal-body">
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12">
                    <h6>Contact Informations</h6>
                    {" "}
                    <label>
                      <small className="text-muted">Matricule</small>
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={data.matricule}
                        placeholder="Matricule"
                        disabled={true}
                      />
                    </div>
                    {" "}
                    <label>
                      <small className="text-muted">Téléphone</small>
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={data.telephone}
                        placeholder="Matricule"
                      />
                    </div>
                    {" "}
                    <label>
                      <small className="text-muted">Email</small>
                    </label>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        value={data.email}
                        placeholder="Email"
                        onChange={() => {}}
                      />
                    </div>
                  </div>
                </div>
            </div>
            <div className="modal-footer row clearfix">
                <div className="col">
                    <button type="button" className="btn btn-primary btn-block"
                        onClick={() => {
                            //this.props.onPresAddEvent();
                            //setModalStatus(false)
                            document.getElementById("updateContactsModal").classList.toggle("show")
                        }}
                    >
                        Add
                    </button>
              </div>
              <div className="col">
                <button
                    type="button"
                    onClick={() => {
                    //this.props.onPresAddEvent();
                    //setModalStatus(false)
                    document.getElementById("updateContactsModal").classList.toggle("show")
                    }}
                    className="btn btn-simple btn-block btn-danger"
                    data-dismiss="modal"
                >
                    CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
    return ( 
        <>
        {isModalOpen && document.getElementById("updateContactsLocationModal")?.classList.toggle("show")}
      <div
        id="updateContactsLocationModal"
        //className={isModalOpen ? "modal fade show" : "modal fade"}
        className={"modal fade"}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="defaultModalLabel">
                Update Profile
              </h4>
            </div>
            <div className="modal-body">
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12">
                    <h6>Location Informations</h6>
                    {" "}
                    <label>
                      <small className="text-muted">CNI</small>
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={data.CNI}
                        disabled=""
                        onChange={() => {}}
                        placeholder="CNI:2018701245678954"
                      />
                    </div>
                    {" "}
                    <label>
                      <small className="text-muted">Address</small>
                    </label>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        value={data.address?data.address:""}
                        placeholder="Email"
                        onChange={() => {}}
                      />
                    </div>
                    {" "}
                    <label>
                      <small className="text-muted">Language</small>
                    </label>
                    <div className="form-group">
                      <select className="form-control" defaultValue="en_US">
                          {Languages.map((language, i) => {
                                return (<option key={language.code+'-'+i} value={language.code}>{language.name}</option>
                                )
                              })}
                          </select>
                    </div>
                    {" "}
                    <label>
                      <small className="text-muted">Time Zone</small>
                    </label>
                    <div className="form-group">
                      <select className="form-control" defaultValue="UTC-5">
                        {TimeZones.map((timeZone, i) => {
                            //if(country.code===Employee.timezone) 
                            return (<option key={timeZone.name+'-'+i} value={timeZone.timezone}>{timeZone.timezone}</option>
                            )
                          })}
                      </select>
                    </div>
                  </div>
                  

                  
                </div>
            </div>
            <div className="modal-footer row clearfix">
                <div className="col">
                    <button type="button" className="btn btn-primary btn-block"
                        onClick={() => {
                            //this.props.onPresAddEvent();
                            //setModalStatus(false)
                            document.getElementById("updateContactsLocationModal").classList.toggle("show")
                        }}
                    >
                        Add
                    </button>
              </div>
              <div className="col">
                <button
                    type="button"
                    onClick={() => {
                    //this.props.onPresAddEvent();
                    //setModalStatus(false)
                    document.getElementById("updateContactsLocationModal").classList.toggle("show")
                    }}
                    className="btn btn-simple btn-block btn-danger"
                    data-dismiss="modal"
                >
                    CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );

}

export const UpdateEmployeeBillsModal = ({ isModalOpen=false, data }) => {

    return ( 
        <>
        {isModalOpen && document.getElementById("updateBillsModal")?.classList.toggle("show")}
      <div
        id="updateBillsModal"
        //className={isModalOpen ? "modal fade show" : "modal fade"}
        className={"modal fade"}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="title" id="defaultModalLabel">
                Update Profile
              </h4>
            </div>
            <div className="modal-body">
                <div className="row clearfix">
                  <div className="col-lg-12 col-md-12">
                    <h6>Contact Informations</h6>
                    {" "}
                    <label>
                      <small className="text-muted">CNI</small>
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        value={data.CNI}
                        disabled=""
                        onChange={() => {}}
                        placeholder="CNI:2018701245678954"
                      />
                    </div>
                    {" "}
                    <label>
                      <small className="text-muted">Email</small>
                    </label>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        value={data.email}
                        placeholder="Email"
                        onChange={() => {}}
                      />
                    </div>
                    {" "}
                    <label>
                      <small className="text-muted">Matricule</small>
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={data.matricule}
                        placeholder="Matricule"
                      />
                    </div>
                    {" "}
                    <label>
                      <small className="text-muted">Téléphone</small>
                    </label>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={data.telephone}
                        placeholder="Matricule"
                      />
                    </div>
                  </div>
                  

                  
                </div>
            </div>
            <div className="modal-footer row clearfix">
                <div className="col">
                    <button type="button" className="btn btn-primary btn-block"
                        onClick={() => {
                            //this.props.onPresAddEvent();
                            //setModalStatus(false)
                            document.getElementById("updateBillsModal").classList.toggle("show")
                        }}
                    >
                        Add
                    </button>
              </div>
              <div className="col">
                <button
                    type="button"
                    onClick={() => {
                    //this.props.onPresAddEvent();
                    //setModalStatus(false)
                    document.getElementById("updateBillsModal").classList.toggle("show")
                    }}
                    className="btn btn-simple btn-block btn-danger"
                    data-dismiss="modal"
                >
                    CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );

}
