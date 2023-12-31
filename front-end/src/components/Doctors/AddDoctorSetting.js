import React from "react";
import { connect } from "react-redux";
import { Countries, Languages, TimeZones, wServer } from "../../Data/Consts";
import { Toast } from "react-bootstrap";

class AddDoctorSetting extends React.Component {
  
  constructor() {
    super();

    this.state = {
      loading: false,
      toast : false,
      toast_type : "success", //success, danger, info, warning, primary
      toast_title : "Notification",
      toast_content : "L'opération a réussi!</br> Voir le <a href='/doctor/'>docteur</a>",
      toast_other : {
        field_validation: (field) => `Error with field ${field}`
      }
    }
  }
  render() {
    
    const onSubmit = (event) => {
      event.preventDefault()
      this.setState({...this.state, loading:false})
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
          this.setState({...this.state, toast: true});
          this.setState({...this.state, toast_title:"Notification"});
          return response.json();
        }
      })
      .then((result) => {
          console.log(result);
          setTimeout(()=> {
            this.setState({...this.state, loading:false})
            this.setState({...this.state, toast:false});
          }, 1500);
      })
      .catch(error => console.log('error', error)); 
    }
    return (
      
      <div>
        {this.state.toast ? (
          <Toast
            id="toast-container"
            show={this.state.toast}
            onClose={() => {
              this.setState({...this.state, toast:false});
            }}
            className={`toast-${this.state.toast_type} toast-bottom-right`}
            autohide={true}
            delay={5000}
          >
            <Toast.Header className={`toast-${this.state.toast_type} mb-0`}>
              {this.state.toast_title}
            </Toast.Header>
          </Toast>
        ) : null}
        
          <h6>Personal Information</h6>
          <form id="addDoctorForm" onSubmit={onSubmit}>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="prenom"
                    placeholder="First Name"
                    type="text"
                    required
                  />
                </div>
                <div className="form-group">
                  {/* YYYY-MM-DD */}
                  <input
                    className="form-control"
                    name="date_naissance" 
                    // type="date"
                    data-date-autoclose="true"
                    data-provide="datepicker"
                    placeholder="DateBirth"
                    required
                  />
                </div>
                {/* <div className="form-group">
                  <div>
                    <label className="fancy-radio">
                      <input
                        name="gender2"
                        type="radio"
                        value="male"
                        onChange={() => {}}
                      />
                      <span>
                        <i></i>Male
                      </span>
                    </label>
                    <label className="fancy-radio">
                      <input
                        name="gender2"
                        type="radio"
                        value="female"
                        onChange={() => {}}
                      />
                      <span>
                        <i></i>Female
                      </span>
                    </label>
                  </div>
                </div> */}
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="icon-calendar"></i>
                      </span>
                    </div>
                    <input
                      className="form-control"
                      name="email"
                      placeholder="Enter your mail"
                      type="text"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="matricule"
                    placeholder="Matricule"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="nom"
                    placeholder="Last Name"
                    type="text"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="lieu_naissance"
                    placeholder="Lieu de naissance"
                    type="text"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="domicile"
                    placeholder="Address"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    name="CNI"
                    placeholder="CNI/Passport"
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <select className="form-control" 
                    defaultValue={'CM'} 
                    defaultChecked={'CM'}
                    name="nationalite"
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
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="telephone"
                    placeholder="Phone Number"
                    type="text"
                  />
                </div>
                <div className="form-group">
                <select className="form-control" 
                    defaultValue={'en'} 
                    defaultChecked={'en'}
                    >
                    <option value="">-- Select Language --</option>
                    {Languages.map((lang, i)=>{
                    return (
                        <option key={lang.code} value={lang.lang}>{lang.name}</option>
                    )
                    })}
                  </select>
                </div>
                <button className="btn btn-primary btn-block" type="submit">
                Submit
                </button>{" "}
                &nbsp;&nbsp;
                {/* <button className="btn btn-default" type="button">
                Cancel
                </button> */}
                </div>
            </div>
          </form>
      </div>
      
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(AddDoctorSetting);
