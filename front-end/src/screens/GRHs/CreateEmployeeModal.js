import React, { useState } from "react";
import { Countries, Languages, Postes, TimeZones } from "../../Data/Consts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson, faWeight } from "@fortawesome/free-solid-svg-icons";
import { wServer } from "../../Data/Consts";
import { Toast } from "react-bootstrap";

export const CreateEmployeeFormModal = ({ isModalOpen=false }) => {

    //const [modalStatus,setModalStatus] = useState(false)

    //isModalOpen && setModalStatus(true);
    const [state,setState] = useState({
        loading: false,
        toast : false,
        toast_type : "success", //success, danger, info, warning, primary
        toast_title : "Notification",
        toast_content : "L'opération a réussi!</br> Voir le <a href='/doctor/'>docteur</a>",
        toast_other : {
          field_validation: (field) => `Error with field ${field}`,
        }
    })

    const submitEmployee = (event) => {
        event.preventDefault()
        setState({...state, loading:false})
        var formContent = new FormData(document.getElementById("createEmployeeForm"));
        fetch(`${wServer.CREATE.PERSONNEL}`, {
          method: 'POST',
          redirect: 'follow',
          headers: {'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`},
          // body:{...formContent},
          body: formContent,
        })
        .then((response) => {
            console.log(response.json())
          if (response.status === 200) {
            setState({...state, toast: true});
            setState({...state, toast_title:"Notification"});
            
            //reset form fields
            document.getElementById("createEmployeeForm").reset()
            //close modal
            document.getElementById("createEmployeeModal").classList.toggle("show")
            
            return response.json();
          }
        })
        .then((result) => {
            console.log(result);
            setTimeout(()=> {
              setState({...state, loading:false})
              setState({...state, toast:false});
            }, 1500);
        })
        .catch(error => console.log('error', error)); 
    }

    return ( 
        <>
        {isModalOpen && document.getElementById("createEmployeeModal")?.classList.toggle("show")}
        {state.toast ? (
          <Toast
            id="toast-container"
            show={state.toast}
            onClose={() => {
              setState({...state, toast:false});
            }}
            className={`toast-${state.toast_type} toast-bottom-right`}
            autohide={true}
            delay={5000}
          >
            <Toast.Header className={`toast-${state.toast_type} mb-0`}>
              {state.toast_title}
            </Toast.Header>
          </Toast>
        ) : null}
      <div
        id="createEmployeeModal"
        //className={isModalOpen ? "modal fade show" : "modal fade"}
        className={"modal fade"}
        role="dialog"
      >
        <form id="createEmployeeForm" onSubmit={submitEmployee}>
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="title" id="defaultModalLabel">
                    Add Employee
                </h4>
                </div>
                <div className="modal-body">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            
                            <div className="row clearfix">
                                <div className="col-md-6">
                                    <label>
                                        <small className="text-muted">First Name</small>
                                    </label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="prenom"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>
                                        <small className="text-muted">Last Name</small>
                                    </label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="nom"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <label>
                                        <small className="text-muted">Email</small>
                                    </label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <label>
                                        <small className="text-muted">Matricule</small>
                                    </label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="matricule"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label>
                                    <small className="text-muted">Gender <br /></small>
                                </label>
                                <div>
                                    <label className="fancy-radio">
                                        <input name="sexe" value="male" type="radio"/>
                                        <span><i></i>Male</span>
                                    </label>
                                    <label className="fancy-radio">
                                        <input name="sexe" value="female" type="radio"/>
                                        <span><i></i>Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                        
                            {" "}
                            <label>
                            <small className="text-muted">Poste</small>
                            </label>
                            <div className="form-group">
                            <select className="form-control" 
                                defaultValue="DR" 
                                defaultChecked=""
                                // name="poste"
                                name="type_personnel"
                                required
                                >
                                <option value="">-- Select Poste --</option>
                                {Postes.map((poste, i)=>{
                                return (
                                    <option key={poste.code} value={poste.code}>{poste.name}</option>
                                )
                                })}
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer row clearfix">
                    <div className="col">
                        <button type="submit" className="btn btn-primary btn-block"
                            // onClick={() => {
                            //     document.getElementById("createEmployeeModal").classList.toggle("show")
                            // }}
                        >
                            Add
                        </button>
                </div>
                <div className="col">
                    <button
                        type="button"
                        onClick={() => {
                        document.getElementById("createEmployeeModal").classList.toggle("show")
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
        </form>
      </div>
      </>
    );

}

export const EditEmployeeFormModal = ({ isModalOpen=false }) => {

    //const [modalStatus,setModalStatus] = useState(false)

    //isModalOpen && setModalStatus(true);
    const [state,setState] = useState({
        loading: false,
        toast : false,
        toast_type : "success", //success, danger, info, warning, primary
        toast_title : "Notification",
        toast_content : "L'opération a réussi!</br> Voir le <a href='/doctor/'>docteur</a>",
        toast_other : {
          field_validation: (field) => `Error with field ${field}`,
        }
    })

    const editEmployee = (event) => {
        event.preventDefault()
        setState({...state, loading:false})
        var formContent = new FormData(document.getElementById("addDoctorForm"));
        fetch(`${wServer.CREATE.DOCTOR}`, {
          method: 'POST',
          redirect: 'follow',
          headers: {'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`},
          // body:{...formContent},
          body: formContent,
        })
        .then((response) => {
          if (response.status === 200) {
            setState({...state, toast: true});
            setState({...state, toast_title:"Notification"});
            return response.json();
          }
        })
        .then((result) => {
            console.log(result);
            setTimeout(()=> {
              setState({...state, loading:false})
              setState({...state, toast:false});
            }, 1500);
        })
        .catch(error => console.log('error', error)); 
    }

    return ( 
        <>
        {isModalOpen && document.getElementById("editEmployeeModal")?.classList.toggle("show")}
        {state.toast ? (
          <Toast
            id="toast-container"
            show={state.toast}
            onClose={() => {
              setState({...state, toast:false});
            }}
            className={`toast-${state.toast_type} toast-bottom-right`}
            autohide={true}
            delay={5000}
          >
            <Toast.Header className={`toast-${state.toast_type} mb-0`}>
              {state.toast_title}
            </Toast.Header>
          </Toast>
        ) : null}
      <div
        id="editEmployeeModal"
        //className={isModalOpen ? "modal fade show" : "modal fade"}
        className={"modal fade"}
        role="dialog"
      >
        <form id="editEmployeeForm" onSubmit={editEmployee}>
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h4 className="title" id="defaultModalLabel">
                    Add Employee
                </h4>
                </div>
                <div className="modal-body">
                    <div className="row clearfix">
                        <div className="col-lg-12 col-md-12">
                            
                            <div className="row clearfix">
                                {" "}
                                <div className="col-md-3">
                                    <label>
                                        <small className="text-muted">Temperature</small>
                                    </label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <>°C</>
                                            </span>
                                            </div>
                                            <input
                                            data-provide="datepicker"
                                            data-date-autoclose="true"
                                            className="form-control"
                                            placeholder=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                {" "}
                                <div className="col-md-3">
                                    <label>
                                        <small className="text-muted">Weight</small>
                                    </label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                            <FontAwesomeIcon icon={faWeight} size="xl" />
                                            </span>
                                            </div>
                                            <input
                                            data-provide="datepicker"
                                            data-date-autoclose="true"
                                            className="form-control"
                                            placeholder=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                {" "}
                                <div className="col-md-3">
                                    <label>
                                        <small className="text-muted">Height</small>
                                    </label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                            <FontAwesomeIcon icon={faPerson} size="xl" />
                                            </span>
                                            </div>
                                            <input
                                            data-provide="datepicker"
                                            data-date-autoclose="true"
                                            className="form-control"
                                            placeholder=""
                                            />
                                        </div>
                                    </div>
                                </div>
                                {" "}
                                <div className="col-md-3">
                                    <label>
                                        <small className="text-muted">Pressure</small>
                                    </label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="icon-drop"></i>
                                            </span>
                                            </div>
                                            <input
                                            data-provide="datepicker"
                                            data-date-autoclose="true"
                                            className="form-control"
                                            placeholder=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row clearfix">
                                <div className="col-md-6">
                                    <label>
                                        <small className="text-muted">First Name</small>
                                    </label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label>
                                        <small className="text-muted">Last Name</small>
                                    </label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            
                            <div className="form-group">
                                <label>
                                    <small className="text-muted">Gender <br /></small>
                                </label>
                                <div>
                                    <label className="fancy-radio">
                                        <input name="gender2" defaultValue="male" type="radio" />
                                        <span><i></i>Male</span>
                                    </label>
                                    <label className="fancy-radio">
                                        <input name="gender2" defaultValue="female" type="radio"/>
                                        <span><i></i>Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                        
                            {" "}
                            <label>
                            <small className="text-muted">Nationalité</small>
                            </label>
                            <div className="form-group">
                            <select className="form-control" 
                                defaultValue="CM" 
                                defaultChecked=""
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
                                document.getElementById("editEmployeeModal").classList.toggle("show")
                            }}
                        >
                            Add
                        </button>
                </div>
                <div className="col">
                    <button
                        type="button"
                        onClick={() => {
                        document.getElementById("editEmployeeModal").classList.toggle("show")
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
        </form>
      </div>
      </>
    );

}
