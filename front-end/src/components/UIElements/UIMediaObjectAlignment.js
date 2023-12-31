import React from "react";
import { connect } from "react-redux";

class UIMediaObjectAlignment extends React.Component {
  render() {
    return (
      <div className="col-lg-12 col-md-12">
        <div className="card">
          <div className="header">
            <h2>Media Alignment</h2>
          </div>
          <div className="body">
            <div className="bs-example" data-example-id="media-alignment">
              <div className="media">
                <div className="media-left">
                  {" "}
                  <a>
                    {" "}
                    <img
                      alt=""
                      className="media-object"
                      src="http://via.placeholder.com/64x64"
                      width="64"
                      height="64"
                    />{" "}
                  </a>{" "}
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Top aligned media</h4>
                  <p>
                    {" "}
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.{" "}
                  </p>
                  <p>
                    {" "}
                    Donec sed odio dui. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.{" "}
                  </p>
                </div>
              </div>
              <div className="media">
                <div className="media-left media-middle">
                  {" "}
                  <a>
                    {" "}
                    <img
                      alt=""
                      className="media-object"
                      src="http://via.placeholder.com/64x64"
                      width="64"
                      height="64"
                    />{" "}
                  </a>{" "}
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Middle aligned media</h4>
                  <p>
                    {" "}
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.{" "}
                  </p>
                  <p>
                    {" "}
                    Donec sed odio dui. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.{" "}
                  </p>
                </div>
              </div>
              <div className="media">
                <div className="media-left media-bottom">
                  {" "}
                  <a>
                    {" "}
                    <img
                      alt=""
                      className="media-object"
                      src="http://via.placeholder.com/64x64"
                      width="64"
                      height="64"
                    />{" "}
                  </a>{" "}
                </div>
                <div className="media-body">
                  <h4 className="media-heading">Bottom aligned media</h4>
                  <p>
                    {" "}
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.{" "}
                  </p>
                  <p>
                    {" "}
                    Donec sed odio dui. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Cum sociis natoque penatibus et magnis
                    dis parturient montes, nascetur ridiculus mus.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ mailInboxReducer }) => ({});

export default connect(mapStateToProps, {})(UIMediaObjectAlignment);
