import React from "react";
import { connect } from "react-redux";

class UIListGroupActive extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Active items</h2>
          </div>
          <div className="body">
            <ul className="list-group">
              <li className="list-group-item active">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIListGroupActive);
