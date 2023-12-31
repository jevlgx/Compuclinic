import React from "react";
import { connect } from "react-redux";


class AjouterMedicamentSetting extends React.Component {
  render() {
    return (
      <div className="medoc">
        <h6> Add Medication</h6>
        <div className="rightheader">
          
           <a className="btn btn-primary" href="ajouterMedicament"> Add Category </a>               
        
        </div>
        
      <form className="form-class1">
          <div className="column clearfix">
            <div className="addmedoc">
              <div className="form-group">
              
                <input
                  className="form-control1"
                  placeholder="Medication wording"
                  type="text"
                />  
              </div>
              <div className="form-group">
              <select className="form-control1">
                  <option value="">Family wording</option>
                  <option value="AF">Antimalarial</option>
                  <option value="AX">Pain Killer</option>
                  <option value="AL">Antibiotic</option>
                  <option value="DZ">Deworming medication</option>
                  <option value="AS">Dental Pain killer</option>
                  <option value="AD">Vitamine</option>
                </select> 
                
              </div>
            </div>
              <div className="form-group">
                <input
                  className="form-control1"
                  placeholder="Conditionning"
                  type="text"
                />  
              </div>
              <div className="form-group">
              <select className="form-control1">
                  <option value="">-- Rayon --</option>
                  <option value="AF">A</option>
                  <option value="AX">B</option>
                  <option value="AL">C</option>
                  <option value="DZ">D</option>
                  <option value="AS">E</option>
                  <option value="AD">F</option>
                  <option value="AF">G</option>
                  <option value="AX">H</option>
                  <option value="AL">I</option>
                  <option value="DZ">J</option>
                  <option value="AS">K</option>
                  <option value="AD">L</option>
                </select>
              </div>
            </div>
          
         
              <button className="btn btn-primary" type="button">
              Submit
              </button>{" "}
              &nbsp;&nbsp;
              <button className="btn btn-default" type="button">
              Cancel
              </button>
      </form>
    </div>  
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(AjouterMedicamentSetting);
