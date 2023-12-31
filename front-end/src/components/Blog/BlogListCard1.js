import React from "react";
import { connect } from "react-redux";
import image from "../../assets/images/blog/blog-page-3.jpg";

class BlogListCard1 extends React.Component {
  render() {
    return (
      <div className="card single_post2">
        <img alt="img" className="img-fluid" src={image} />
        <div className="body">
          <div className="content">
            <div className="actions_sidebar">
              <a>
                <i className="icon-share"></i>
              </a>
              <a>
                <i className="icon-heart"></i>
                <span>5</span>
              </a>
              <a>
                <i className="icon-bubble"></i>
                <span>8</span>
              </a>
            </div>
            <h4 className="title">All photographs are accurate</h4>
            <p className="date">
              <small>Jun 15, 2018</small>
            </p>
            <p className="text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
            </p>
            <a className="btn btn-primary">READ MORE</a>
          </div>
        </div>
      </div>
    );
  }
}

BlogListCard1.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(BlogListCard1);
