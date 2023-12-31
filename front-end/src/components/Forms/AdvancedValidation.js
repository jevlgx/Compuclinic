import React from "react";
import { connect } from "react-redux";

class AdvancedValidation extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     textInput: "",
  //     emailInput: "",
  //     areaInput: "",
  //     between: "",
  //     submeet: false,
  //   };
  // }
  render() {
    // const { textInput, emailInput, areaInput, submeet, between } = this.state;
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="header">
            <h2>Advanced Validation</h2>
          </div>
          <div>
             <img src={require("../../assets/images/image-gallery/doc1.jpeg")} alt="First slide"/>
          </div>
         {/* <div className="body">
            <form className="ng-untouched ng-pristine ng-invalid">
              <div className="form-group">
                <label htmlFor="text-input1">Min. 8 Characters</label>
                <input
                  className="form-control ng-untouched ng-pristine ng-invalid"
                  minLength="8"
                  name="textminlength"
                  required=""
                  type="text"
                  onChange={(e) => {
                    this.setState({ textInput: e.target.value });
                  }}
                />
                {textInput === "" && submeet ? (
                  <ul className="parsley-errors-list filled" id="parsley-id-29">
                    <li className="parsley-required">
                      This value is required.
                    </li>
                  </ul>
                ) : null}
                {textInput.length < 8 && textInput !== "" && submeet ? (
                  <ul className="parsley-errors-list filled" id="parsley-id-29">
                    <li className="parsley-required">
                      It should have 8 characters or more
                    </li>
                  </ul>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="text-input2">Between 5-10 Characters</label>
                <input
                  className="form-control ng-untouched ng-pristine ng-invalid"
                  maxLength="10"
                  minLength="5"
                  name="textminmaxlength"
                  required=""
                  type="text"
                  onChange={(e) => {
                    this.setState({ emailInput: e.target.value });
                  }}
                />
                {emailInput === "" && submeet ? (
                  <ul className="parsley-errors-list filled" id="parsley-id-29">
                    <li className="parsley-required">
                      This value is required.
                    </li>
                  </ul>
                ) : null}
                {emailInput.length < 5 && emailInput !== "" && submeet ? (
                  <ul className="parsley-errors-list filled" id="parsley-id-29">
                    <li className="parsley-required">
                      This value length is invalid. It should be between 5 and
                      10 characters long.
                    </li>
                  </ul>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="text-input3">Min. Number ( &gt;= 5 )</label>
                <input
                  className="form-control ng-untouched ng-pristine ng-invalid"
                  name="minval"
                  required=""
                  type="text"
                  onChange={(e) => {
                    this.setState({ areaInput: e.target.value });
                  }}
                />
                {areaInput === "" && submeet ? (
                  <ul className="parsley-errors-list filled" id="parsley-id-29">
                    <li className="parsley-required">
                      This value is required.
                    </li>
                  </ul>
                ) : null}
                {areaInput <= 4 && areaInput !== "" && submeet ? (
                  <ul className="parsley-errors-list filled" id="parsley-id-29">
                    <li className="parsley-required">
                      This value should be greater than or equal to 5.
                    </li>
                  </ul>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="text-input4">Between 20-30</label>
                <input
                  className="form-control ng-untouched ng-pristine ng-invalid"
                  name="range"
                  required=""
                  type="text"
                  onChange={(e) => {
                    this.setState({ between: e.target.value });
                  }}
                />
                {(between === "") & submeet ? (
                  <ul className="parsley-errors-list filled" id="parsley-id-29">
                    <li className="parsley-required">
                      This value is required.
                    </li>
                  </ul>
                ) : null}
                {(between !== "") & submeet & (between < 20) ? (
                  <ul className="parsley-errors-list filled" id="parsley-id-29">
                    <li className="parsley-required">
                      This value length is invalid. It should be between 20 and
                      30 characters long.
                    </li>
                  </ul>
                ) : null}
                {(between !== "") & submeet & (between > 30) ? (
                  <ul className="parsley-errors-list filled" id="parsley-id-29">
                    <li className="parsley-required">
                      This value length is invalid. It should be between 20 and
                      30 characters long.
                    </li>
                  </ul>
                ) : null}
              </div>
              <br />
            </form>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => {
                this.setState({ submeet: true });
              }}
            >
              Validate
            </button>
            </div>*/}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(AdvancedValidation);
