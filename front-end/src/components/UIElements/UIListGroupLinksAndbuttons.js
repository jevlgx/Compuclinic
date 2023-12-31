import React from "react";
import { connect } from "react-redux";

class UIListGroupLinksandbuttons extends React.Component {
  render() {
    return (
      <div className="row clealfix">
        <div className="col-lg-12 col-md-12">
          <div className="card">
            <div className="header">
              <h2>Links and buttons</h2>
            </div>
            <div className="body">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <h6>With Anchor</h6>
                  <div className="list-group">
                    <a className="list-group-item list-group-item-action active">
                      Cras justo odio
                    </a>
                    <a className="list-group-item list-group-item-action">
                      Dapibus ac facilisis in
                    </a>
                    <a className="list-group-item list-group-item-action">
                      Morbi leo risus
                    </a>
                    <a className="list-group-item list-group-item-action">
                      Porta ac consectetur ac
                    </a>
                    <a className="list-group-item list-group-item-action disabled">
                      Vestibulum at eros
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <h6>With button</h6>
                  <div className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action active"
                    >
                      Cras justo odio
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                    >
                      Dapibus ac facilisis in
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                    >
                      Morbi leo risus
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                    >
                      Porta ac consectetur ac
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action"
                      disabled
                    >
                      Vestibulum at eros
                    </button>
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

export default connect(mapStateToProps, {})(UIListGroupLinksandbuttons);
