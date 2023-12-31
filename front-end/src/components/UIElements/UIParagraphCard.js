import React from "react";
import { connect } from "react-redux";

class UIparagraphCard extends React.Component {
  render() {
    const { AlignData, BlockquoteData } = this.props;
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Paragraph</h2>
          </div>
          <div className="body">
            <p>
              Appropriately benchmark web-enabled bandwidth and functionalized
              leadership skills. Conveniently syndicate global opportunities
              without interactive methods of empowerment. Collaboratively
              conceptualize user-centric e-tailers for visionary methodologies.
              Dramatically myocardinate. Phosfluorescently disintermediate
              unique resources whereas reliable mindshare. Competently optimize
              client-focused infrastructures vis-a-vis e-business human capital.
              Uniquely formulate sustainable benefits whereas functional
              results. Energistically myocardinate bleeding-edge e-business.
            </p>
            <hr />
            {BlockquoteData
              ? BlockquoteData.map((data, i) => {
                  return (
                    <blockquote key={"hds" + i}>
                      <h6>{data.HeaderText}</h6>
                      <p className={data.ParaClass}>
                        "{data.ParagraphData}"
                        <br />
                        <br />
                        <small>- {data.AutoName}</small>
                      </p>
                    </blockquote>
                  );
                })
              : null}

            <hr />
            <div className="row clearfix">
              <div className="col-md-3">
                <p className="align-left">
                  {" "}
                  <b>Align Left</b>{" "}
                </p>
                <div className="align-left"> {AlignData}</div>
              </div>
              <div className="col-md-3">
                <p className="align-center">
                  {" "}
                  <b>Align Center</b>{" "}
                </p>
                <div className="align-center">{AlignData} </div>
              </div>
              <div className="col-md-3">
                <p className="align-right">
                  {" "}
                  <b>Align Right</b>{" "}
                </p>
                <div className="align-right">{AlignData} </div>
              </div>
              <div className="col-md-3">
                <p className="align-justify">
                  {" "}
                  <b>Align Justify</b>{" "}
                </p>
                <div className="align-justify">{AlignData} </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIparagraphCard);
