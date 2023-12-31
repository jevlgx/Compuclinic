import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Avatar1 from "../assets/images/xs/avatar1.jpg";
import Avatar2 from "../assets/images/xs/avatar2.jpg";
import Avatar3 from "../assets/images/xs/avatar3.jpg";
import Avatar7 from "../assets/images/xs/avatar7.jpg";
import Avatar8 from "../assets/images/xs/avatar8.jpg";
import Avatar9 from "../assets/images/xs/avatar9.jpg";

class ChatInbox extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card chat-app">
            <div className="people-list" id="plist">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="icon-magnifier"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Search..."
                  type="text"
                />
              </div>
              <ul className="list-unstyled chat-list mt-2 mb-0">
                <li className="clearfix">
                  <img alt="avatar" src={Avatar1} />
                  <div className="about">
                    <div className="name">Vincent Porter</div>
                    <div className="status">
                      <i className="fa fa-circle offline"></i> left 7 mins ago{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix active">
                  <img alt="avatar" src={Avatar2} />
                  <div className="about">
                    <div className="name">Aiden Chavez</div>
                    <div className="status">
                      <i className="fa fa-circle online"></i> online{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix">
                  <img alt="avatar" src={Avatar3} />
                  <div className="about">
                    <div className="name">Mike Thomas</div>
                    <div className="status">
                      <i className="fa fa-circle online"></i> online{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix">
                  <img alt="avatar" src={Avatar7} />
                  <div className="about">
                    <div className="name">Christian Kelly</div>
                    <div className="status">
                      <i className="fa fa-circle offline"></i> left 10 hours ago{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix">
                  <img alt="avatar" src={Avatar8} />
                  <div className="about">
                    <div className="name">Monica Ward</div>
                    <div className="status">
                      <i className="fa fa-circle online"></i> online{" "}
                    </div>
                  </div>
                </li>
                <li className="clearfix">
                  <img alt="avatar" src={Avatar9} />
                  <div className="about">
                    <div className="name">Dean Henry</div>
                    <div className="status">
                      <i className="fa fa-circle offline"></i> offline since Oct
                      28{" "}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="chat">
              <div className="chat-header clearfix">
                <div className="row">
                  <div className="col-lg-6">
                    <a data-target="#view_info" data-toggle="modal">
                      <img alt="avatar" src={Avatar2} />
                    </a>
                    <div className="chat-about">
                      <h6 className="m-b-0">Aiden Chavez</h6>
                      <small>Last seen: 2 hours ago</small>
                    </div>
                  </div>
                  <div className="col-lg-6 hidden-sm text-right">
                    <a className="btn btn-outline-secondary mr-1">
                      <i className="icon-camera"></i>
                    </a>
                    <a className="btn btn-outline-primary mr-1">
                      <i className="icon-camcorder"></i>
                    </a>
                    <a className="btn btn-outline-info mr-1">
                      <i className="icon-settings"></i>
                    </a>
                    <a className="btn btn-outline-warning mr-1">
                      <i className="icon-question"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="chat-history">
                <ul className="m-b-0">
                  <li className="clearfix">
                    <div className="message-data text-right">
                      <span className="message-data-time">10:10 AM, Today</span>
                      <img alt="avatar" src={Avatar7} />
                    </div>
                    <div className="message other-message float-right">
                      {" "}
                      Hi Aiden, how are you? How is the project coming along?{" "}
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="message-data">
                      <span className="message-data-time">10:12 AM, Today</span>
                    </div>
                    <div className="message my-message">
                      Are we meeting today?
                    </div>
                  </li>
                  <li className="clearfix">
                    <div className="message-data">
                      <span className="message-data-time">10:15 AM, Today</span>
                    </div>
                    <div className="message my-message">
                      Project has been already finished and I have results to
                      show you.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="chat-message clearfix">
                <div className="input-group mb-0">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="icon-paper-plane"></i>
                    </span>
                  </div>
                  <input
                    className="form-control"
                    placeholder="Enter text here..."
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ChatInbox.propTypes = {};

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(ChatInbox);
