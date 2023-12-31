import React from "react";

class SecurityMainCard extends React.Component {
  render() {
    const {
      Heading,
      SuccessText,
      DangerText,
      DangerButtonText,
      SuccessButtonText,
      OnClick,
      Toggle,
    } = this.props;
    return (
      <div className="col-lg-6 col-md-6 col-md-12">
        <div className="card">
          <div className="body">
            <div className="clearfix">
              <div className="pull-left">
                <h6 className="mb-0">{Heading}</h6>
                {Toggle ? (
                  <small className="text-success">{SuccessText}</small>
                ) : (
                  <small className="text-danger">{DangerText}</small>
                )}
              </div>
              <div className="pull-right">
                {Toggle ? (
                  <button
                    onClick={OnClick}
                    className="btn btn-outline-danger"
                    type="button"
                  >
                    {DangerButtonText}
                  </button>
                ) : (
                  <button
                    onClick={OnClick}
                    className="btn btn-outline-success"
                    type="button"
                  >
                    {SuccessButtonText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SecurityMainCard;
