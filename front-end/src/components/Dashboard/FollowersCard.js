import React from "react";
import { connect } from "react-redux";
import Avatar4 from "../../assets/images/xs/avatar4.jpg";
import Avatar5 from "../../assets/images/xs/avatar5.jpg";
import Avatar2 from "../../assets/images/xs/avatar2.jpg";
import Avatar1 from "../../assets/images/xs/avatar1.jpg";
import Avatar3 from "../../assets/images/xs/avatar3.jpg";

class FollowersCard extends React.Component {
  render() {
    const { HeaderText } = this.props;
    return (
      <div className="card">
        <div className="header">
          <h2>{HeaderText ? HeaderText : "Followers"}</h2>
        </div>
        <div className="body">
          <form>
            <div className="input-group m-b-20">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="icon-magnifier"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
              />
            </div>
          </form>
          <ul className="right_chat list-unstyled">
            <li className="online">
              <a>
                <div className="media">
                  <img className="media-object " src={Avatar4} alt="" />
                  <div className="media-body">
                    <span className="name">Chris Fox</span>
                    <span className="message">Designer, Blogger</span>
                    <span className="badge badge-outline status"></span>
                  </div>
                </div>
              </a>
            </li>
            <li className="online">
              <a>
                <div className="media">
                  <img className="media-object " src={Avatar5} alt="" />
                  <div className="media-body">
                    <span className="name">Joge Lucky</span>
                    <span className="message">Java Developer</span>
                    <span className="badge badge-outline status"></span>
                  </div>
                </div>
              </a>
            </li>
            <li className="offline">
              <a>
                <div className="media">
                  <img className="media-object " src={Avatar2} alt="" />
                  <div className="media-body">
                    <span className="name">Isabella</span>
                    <span className="message">CEO, Thememakker</span>
                    <span className="badge badge-outline status"></span>
                  </div>
                </div>
              </a>
            </li>
            <li className="offline">
              <a>
                <div className="media">
                  <img className="media-object " src={Avatar1} alt="" />
                  <div className="media-body">
                    <span className="name">Folisise Chosielie</span>
                    <span className="message">Art director, Movie Cut</span>
                    <span className="badge badge-outline status"></span>
                  </div>
                </div>
              </a>
            </li>
            <li className="online">
              <a>
                <div className="media">
                  <img className="media-object " src={Avatar3} alt="" />
                  <div className="media-body">
                    <span className="name">Alexander</span>
                    <span className="message">Writter, Mag Editor</span>
                    <span className="badge badge-outline status"></span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

FollowersCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(FollowersCard);
