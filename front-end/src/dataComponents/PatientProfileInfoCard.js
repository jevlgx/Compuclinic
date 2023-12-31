import React from "react";
import { Dropdown } from "react-bootstrap";
import { connect } from "react-redux";
import { wServer } from "../Data/Consts";

class PatientProfileInfoCard extends React.Component {
  render() {
    const {
      id = window.location.pathname.split("/").pop(),
      address = '795 Folsom Ave, Suite 600 San Francisco, 94107',
      email = 'polytechnique@gmail.com',
      phone = '+ 202-555-2828',
      birth_date = 'October 22th, 1990',
      statut = 'Externe',
      social_twitter = 'facebook.com/',
    } = this.props
    
    this.state = {
      loading: false,
      toast : false,
      toast_type : "success", //success, danger, info, warning, primary
      toast_title : "Notification",
      toast_content : "L'opération a réussi!</br> Voir le <a href='/doctor/'>docteur</a>",
      toast_other : {
        field_validation: (field) => `Error with field ${field}`,
      }
    }

    const InternPatient = () => {
      fetch(`${wServer.UPDATE.PATIENT.INTERN(id)}`, {
        method: 'PUT',
        redirect: 'follow',
        headers: {
          'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`,
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          statut:"Interne"
        }),
      })
      .then((response) => {
          console.log(response.json())
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

    const ExternPatient = () => {
      fetch(`${wServer.UPDATE.PATIENT.EXTERN(id)}`, {
        method: 'PUT',
        redirect: 'follow',
        headers: {
          'Authorization': `Token ${localStorage.getItem("_compuclinicToken")}`,
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          statut:"Externe"
        }),
      })
      .then((response) => {
          console.log(response.json())
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
      <div className="card">
        <div className="header">
          <h2>Info</h2>
          
          <Dropdown as="ul" className="header-dropdown">
            
            <Dropdown.Toggle variant="success" as="li" id="dropdown-basic">
              <Dropdown.Menu
                as="ul"
                className="dropdown-menu dropdown-menu-right"
              >
                <li>
                  <a>Intern</a>
                </li>
                <li>
                  <a>Extern</a>
                </li>
                <li>
                  <a>Delete</a>
                </li>
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
        </div>
        <div className="body">
          {/* Alert Message for patient */}
          <div className="alert alert-info alert-dismissible" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
              <i className="fa fa-info-circle"></i> Une facture Impayée. <a className="alert-link" href="#">Détails</a>
          </div>
          { statut==="Externe"
           ? <button className="btn btn-block btn-success" onClick={InternPatient}>Interner</button>
           : <button className="btn btn-block btn-danger" onClick={ExternPatient}>Externer</button> 
          }
          <hr />
          <small className="text-muted">Actuellement: </small>
          <p>A la réception</p>
          <div></div>
          <hr />
          
          <small className="text-muted">Phone contact: </small>
          <p>{phone}</p>
          <hr />
          <small className="text-muted">Social: </small>
          <p>
            <i className="fa fa-twitter m-r-5"></i> {social_twitter}
          </p>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps.stateToProps, {})(PatientProfileInfoCard);
