import React from "react";
import { connect } from "react-redux";
import avatar4 from "../../assets/images/sm/avatar4.jpg";

class ProductRating extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="body">
          <div className="row">
            <div className="col-sm-3">
              <img className="rounded" src={avatar4} />
              <div className="review-block-name">
                <a>Herman</a>
              </div>
              <span>
                Jun 22, 2018
                <br />1 day ago
              </span>
            </div>
            <div className="col-sm-9">
              <div className="m-b-10">
                <button className="btn btn-warning btn-sm mr-1" type="submit">
                  <i className="icon-star text-light"></i>
                </button>
                <button className="btn btn-warning btn-sm mr-1" type="submit">
                  <i className="icon-star text-light"></i>
                </button>
                <button className="btn btn-warning btn-sm mr-1" type="submit">
                  <i className="icon-star text-light"></i>
                </button>
                <button className="btn btn-warning btn-sm mr-1" type="submit">
                  <i className="icon-star text-light"></i>
                </button>
                <button className="btn btn-warning btn-sm mr-1" type="submit">
                  <i className="icon-star text-light"></i>
                </button>
              </div>
              <h6>this was nice in buy</h6>
              <p>
                this was nice in buy. this was nice in buy. this was nice in
                buy. this was nice in buy this was nice in buy this was nice in
                buy this was nice in buy this was nice in buy
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(ProductRating);
