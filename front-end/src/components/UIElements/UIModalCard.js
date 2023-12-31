import React from "react";
import { connect } from "react-redux";
import modalImage from "../../assets/images/model3.jpg";

class UIModalCard extends React.Component {
  render() {
    const { title, onClick } = this.props;
    return (
      <div className="col-lg-4 col-md-12">
        <div className="card">
          <div className="header">
            <h2>{title}</h2>
          </div>
          <div className="body">
            <a data-toggle="modal" onClick={onClick}>
              <img
                className="img-thumbnail img-fluid"
                src={modalImage}
                alt="User"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIModalCard);
