import React from "react";
import { connect } from "react-redux";

class UIColorsBackgroundGadient extends React.Component {
  render() {
    return (
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12">
          <div className="card">
            <div className="header">
              <h2>Background gradient color</h2>
            </div>
            <div className="body">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-green text-dark">.l-green</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-pink text-dark">.l-pink</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-turquoise text-white">
                    .l-turquoise
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-khaki text-dark">.l-khaki</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-coral text-dark">.l-coral</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-blue text-dark">.l-blue</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-salmon text-white">.l-salmon</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-seagreen text-dark">
                    .l-seagreen
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-amber text-white">.l-amber</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-blush text-white">.l-blush</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-parpl text-white">.l-parpl</div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="p-4 mb-2 l-slategray text-white">
                    .l-slategray
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

export default connect(mapStateToProps, {})(UIColorsBackgroundGadient);
