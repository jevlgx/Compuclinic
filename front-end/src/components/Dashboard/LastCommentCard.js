import React from "react";
import { connect } from "react-redux";
import avatar4 from "../../assets/images/xs/avatar4.jpg";
import avatar5 from "../../assets/images/xs/avatar5.jpg";
import avatar2 from "../../assets/images/xs/avatar2.jpg";
import avatar1 from "../../assets/images/xs/avatar1.jpg";
import avatar3 from "../../assets/images/xs/avatar3.jpg";

class LastCommentCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="header">
          <h2>Last comments</h2>
        </div>
        <div className="body">
          <ul className="right_chat list-unstyled">
            <li className="online">
              <a>
                <div className="media">
                  <img alt="" className="media-object " src={avatar4} />
                  <div className="media-body">
                    <span className="name">
                      Chris Fox <small className="float-right">Just now</small>
                    </span>
                    <span className="message">
                      Lorem ipsum Veniam aliquip culpa laboris minim tempor
                    </span>
                    <span className="badge badge-outline status"></span>
                  </div>
                </div>
              </a>
            </li>
            <li className="online">
              <a>
                <div className="media">
                  <img alt="" className="media-object " src={avatar5} />
                  <div className="media-body">
                    <span className="name">
                      Joge Lucky{" "}
                      <small className="float-right">38 minutes ago</small>
                    </span>
                    <span className="message">
                      Many desktop publishing packages and web page editors
                    </span>
                    <span className="badge badge-outline status"></span>
                  </div>
                </div>
              </a>
            </li>
            <li className="offline">
              <a>
                <div className="media">
                  <img alt="" className="media-object " src={avatar2} />
                  <div className="media-body">
                    <span className="name">
                      Isabella{" "}
                      <small className="float-right">2 hours ago</small>
                    </span>
                    <span className="message">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text
                    </span>
                    <span className="badge badge-outline status"></span>
                  </div>
                </div>
              </a>
            </li>
            <li className="offline">
              <a>
                <div className="media">
                  <img alt="" className="media-object " src={avatar1} />
                  <div className="media-body">
                    <span className="name">
                      Folisise Chosielie{" "}
                      <small className="float-right">32 hours ago</small>
                    </span>
                    <span className="message">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority
                    </span>
                    <span className="badge badge-outline status"></span>
                  </div>
                </div>
              </a>
            </li>
            <li className="online">
              <a>
                <div className="media">
                  <img alt="" className="media-object " src={avatar3} />
                  <div className="media-body">
                    <span className="name">
                      Alexander <small className="float-right">1 day ago</small>
                    </span>
                    <span className="message">
                      It is a long established fact that a reader will be
                      distracted
                    </span>
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

LastCommentCard.propTypes = {};

const mapStateToProps = ({ analyticalReducer }) => ({});

export default connect(mapStateToProps, {})(LastCommentCard);
