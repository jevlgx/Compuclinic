import React from "react";
import { connect } from "react-redux";
import avatar2 from "../../assets/images/sm/avatar2.jpg";
import avatar3 from "../../assets/images/sm/avatar3.jpg";
import avatar5 from "../../assets/images/sm/avatar5.jpg";

class CustomerRating extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>New Customer Ratings </h2>
        </div>
        <div className="body">
          <ul className="row list-unstyled c_review">
            <li className="col-12">
              <div className="avatar">
                <a>
                  <img
                    alt="user"
                    className="rounded"
                    src={avatar2}
                    width="60"
                  />
                </a>
              </div>
              <div className="comment-action">
                <h6 className="c_name">Hossein Shams</h6>
                <p className="c_msg m-b-0">
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                  scelerisque ante sollicitudin commodo.{" "}
                </p>
                <div className="badge badge-info">iPhone 8</div>
                <span className="m-l-10">
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                </span>
                <small className="comment-date float-sm-right">
                  Dec 21, 2017
                </small>
              </div>
            </li>
            <li className="col-12">
              <div className="avatar">
                <a>
                  <img
                    alt="user"
                    className="rounded"
                    src={avatar3}
                    width="60"
                  />
                </a>
              </div>
              <div className="comment-action">
                <h6 className="c_name">Tim Hank</h6>
                <p className="c_msg m-b-0">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                </p>
                <div className="badge badge-info">Nokia 8</div>
                <span className="m-l-10">
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="zmdi zmdi-star-outline text-muted"></i>
                  </a>
                  <a>
                    <i className="zmdi zmdi-star-outline text-muted"></i>
                  </a>
                  <a>
                    <i className="zmdi zmdi-star-outline text-muted"></i>
                  </a>
                </span>
                <small className="comment-date float-sm-right">
                  Dec 18, 2017
                </small>
              </div>
            </li>
            <li className="col-12">
              <div className="avatar">
                <a>
                  <img
                    alt="user"
                    className="rounded"
                    src={avatar5}
                    width="60"
                  />
                </a>
              </div>
              <div className="comment-action">
                <h6 className="c_name">Gary Camara</h6>
                <p className="c_msg m-b-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry
                </p>
                <div className="badge badge-info">HTC U11</div>
                <span className="m-l-10">
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="icon-star text-warning"></i>
                  </a>
                  <a>
                    <i className="zmdi zmdi-star-outline text-muted"></i>
                  </a>
                </span>
                <small className="comment-date float-sm-right">
                  Dec 13, 2017
                </small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ UIElementsReducer }) => ({});

export default connect(mapStateToProps, {})(CustomerRating);
