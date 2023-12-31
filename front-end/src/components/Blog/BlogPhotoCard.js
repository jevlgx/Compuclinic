import React from "react";
import { connect } from "react-redux";
import image from "../../assets/images/blog/blog-page-1.jpg";

class BlogPhotoCard extends React.Component {
  render() {
    return (
      <div className="card single_post">
        <div className="body pb-0">
          <h3 className="m-t-0 m-b-5">
            <a href="blogdetails">
              All photographs are accurate. None of them is the truth
            </a>
          </h3>
          <ul className="meta">
            <li>
              <a>
                <i className="icon-user text-primary"></i>Posted By: John Smith
              </a>
            </li>
            <li>
              <a>
                <i className="icon-tag text-success"></i>Photography
              </a>
            </li>
            <li>
              <a>
                <i className="icon-bubbles text-warning"></i>Comments: 3
              </a>
            </li>
          </ul>
        </div>
        <div className="body">
          <div className="img-post m-b-15">
            <div
              className="carousel slide"
              data-ride="carousel"
              id="carouselExampleControls"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img
                    alt="First slide"
                    className="d-block img-fluid"
                    src={image}
                  />
                </div>
              </div>
            </div>
          </div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
          </p>
          <a className="btn btn-info m-t-20" title="read more">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

BlogPhotoCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(BlogPhotoCard);
