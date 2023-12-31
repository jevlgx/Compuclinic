import React from "react";
import { connect } from "react-redux";

class BlogListCard extends React.Component {
  render() {
    const { ImageUrl, HeaderText, Details } = this.props;

    return (
      <div className="card single_post">
        <div className="body">
          <div className="img-post">
            <img
              className="d-block img-fluid"
              src={ImageUrl}
              alt="First slide"
            />
          </div>
          <h3>
            <a href="blogdetails">{HeaderText}</a>
          </h3>
          <p>{Details}</p>
        </div>
        <div className="footer">
          <div className="actions">
            <a className="btn btn-outline-secondary">Continue Reading</a>
          </div>
          <ul className="stats">
            <li>
              <a>General</a>
            </li>
            <li>
              <a className="icon-heart">28</a>
            </li>
            <li>
              <a className="icon-bubbles">128</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(BlogListCard);
